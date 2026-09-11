import express from 'express';
import cors from 'cors';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Wait helper
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

app.post('/api/recommendations', async (req, res) => {
  const studentData = req.body;

  if (!studentData) {
    return res.status(400).json({ error: 'Missing student data' });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Missing GEMINI_API_KEY environment variable' });
  }

  const prompt = `
You are ScholarAI, an expert AI Scholarship Advisor for Indian students.

Recommend ONLY the TOP 5 scholarships or government schemes that best match the student's profile.

Student Profile:

Name: ${studentData.fullName}
Age: ${studentData.age}
Gender: ${studentData.gender}
State: ${studentData.state}
Education: ${studentData.education}
Annual Family Income: ₹${studentData.income}
Category: ${studentData.category}
Minority: ${studentData.minority}
Disability: ${studentData.disability}

Rules:
- Recommend only 5 scholarships.
- Use simple English.
- Recommend only real scholarships and government schemes available in India.
- Always include the official website.
- No introduction.
- No conclusion.
- Return ONLY Markdown.

For each scholarship use this exact format:

# Scholarship Name

## Eligibility
- Point 1
- Point 2

## Benefits
- Point 1
- Point 2

## Required Documents
- Aadhaar Card
- Income Certificate
- Previous Marks Card
- Bank Passbook

## Official Website
https://official-website.com

Repeat the above format for all 5 scholarships.
`;

  const MAX_RETRIES = 3;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-flash-latest',
        contents: prompt,
      });

      const text =
        response.text ||
        response.candidates?.[0]?.content?.parts?.[0]?.text ||
        '';

      return res.status(200).json({ success: true, data: text.trim() });
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error);

      const message = error?.message || JSON.stringify(error);

      if (
        message.includes('503') ||
        message.includes('UNAVAILABLE') ||
        message.includes('high demand')
      ) {
        if (attempt < MAX_RETRIES) {
          console.log(`Retrying in 3 seconds... (Attempt ${attempt}/${MAX_RETRIES})`);
          await delay(3000);
          continue;
        }

        return res.status(503).json({
          error: 'Google Gemini is currently busy. Please try again in a few minutes.',
        });
      }

      return res.status(500).json({ error: message });
    }
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
