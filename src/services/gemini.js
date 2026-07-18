import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

// Wait helper
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getScholarshipRecommendations(studentData) {
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
        model: "gemini-flash-latest",
        contents: prompt,
      });

      const text =
        response.text ||
        response.candidates?.[0]?.content?.parts?.[0]?.text ||
        "";

      return text.trim();
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error);

      const message = error?.message || JSON.stringify(error);

      if (
        message.includes("503") ||
        message.includes("UNAVAILABLE") ||
        message.includes("high demand")
      ) {
        if (attempt < MAX_RETRIES) {
          console.log("Retrying in 3 seconds...");
          await delay(3000);
          continue;
        }

        throw new Error(
          "Google Gemini is currently busy. Please try again in a few minutes."
        );
      }

      throw new Error(message);
    }
  }
}