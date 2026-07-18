import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import jsPDF from "jspdf";

import { getScholarshipRecommendations } from "../services/gemini";
import StudentProfileCard from "../components/StudentProfileCard";
import RecommendationCard from "../components/RecommendationCard";
import StatsCards from "../components/StatsCards";

function Recommendations() {
  const { state } = useLocation();

  const [loading, setLoading] = useState(true);
  const [aiResponse, setAiResponse] = useState("");

  useEffect(() => {
    if (!state) return;

    const fetchRecommendations = async () => {
      setLoading(true);

      try {
        const response = await getScholarshipRecommendations(state);
        setAiResponse(response);
      } catch (error) {
        console.error(error);
        setAiResponse(
          "❌ Unable to fetch AI recommendations.\n\nPlease try again."
        );
      }

      setLoading(false);
    };

    fetchRecommendations();
  }, [state]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(aiResponse);
      alert("✅ Recommendations copied successfully!");
    } catch {
      alert("❌ Failed to copy recommendations.");
    }
  };

  // ======================================
  // PROFESSIONAL PDF DOWNLOAD
  // ======================================

  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");

    let y = 20;

    // Header
    doc.setFillColor(37, 99, 235);
    doc.rect(0, 0, 210, 30, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("ScholarAI", 105, 15, {
      align: "center",
    });

    doc.setFontSize(12);
    doc.text(
      "AI Scholarship Recommendation Report",
      105,
      23,
      {
        align: "center",
      }
    );

    y = 40;

    // =============================
    // STUDENT PROFILE
    // =============================

    doc.setDrawColor(37, 99, 235);
    doc.setFillColor(245, 249, 255);
    doc.roundedRect(15, y - 5, 180, 72, 3, 3, "FD");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(37, 99, 235);
    doc.text("Student Profile", 20, y + 5);

    y += 15;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);

    doc.text(`Name : ${state.fullName || "-"}`, 20, y);
    doc.text(`Age : ${state.age || "-"}`, 110, y);

    y += 8;

    doc.text(`Gender : ${state.gender || "-"}`, 20, y);
    doc.text(`Education : ${state.education || "-"}`, 110, y);

    y += 8;

    doc.text(`State : ${state.state || "-"}`, 20, y);
    doc.text(`Category : ${state.category || "-"}`, 110, y);

    y += 8;

    doc.text(
  `Income : Rs. ${Number(state.income || 0).toLocaleString("en-IN")}`,
  20,
  y
);
    doc.text(`Minority : ${state.minority || "No"}`, 110, y);

    y += 8;

    doc.text(`Disability : ${state.disability || "No"}`, 20, y);

    y += 20;

    // =============================
    // SCHOLARSHIP SECTION
    // =============================

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(37, 99, 235);

    doc.text("Scholarship Recommendations", 15, y);

    y += 10;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);

    const lines = aiResponse.split("\n");

    lines.forEach((line) => {
            if (y > 270) {
        doc.addPage();
        y = 20;
      }

      // Scholarship Title
      if (line.startsWith("# ")) {

        doc.setFillColor(219, 234, 254);
        doc.roundedRect(12, y - 5, 186, 10, 2, 2, "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(15);
        doc.setTextColor(30, 64, 175);

        doc.text(line.replace("# ", ""), 18, y + 2);

        y += 14;

      }

      // Section Heading
      else if (line.startsWith("## ")) {

        const heading = line.replace("## ", "");

        let color = [0, 0, 0];

        if (heading.includes("Eligibility")) {
          color = [22, 163, 74];
        }

        if (heading.includes("Benefits")) {
          color = [37, 99, 235];
        }

        if (heading.includes("Required")) {
          color = [234, 88, 12];
        }

        if (heading.includes("Official")) {
          color = [124, 58, 237];
        }

        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.setTextColor(...color);

        doc.text(heading, 18, y);

        y += 8;
      }

      // Bullet Points
      else if (line.startsWith("- ")) {

        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(40, 40, 40);

        const wrapped = doc.splitTextToSize(
          "• " + line.substring(2),
          165
        );

        doc.text(wrapped, 22, y);

        y += wrapped.length * 6;
      }

      // Website
      else if (
        line.startsWith("http://") ||
        line.startsWith("https://")
      ) {

        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 255);

        doc.text(line, 22, y);

        y += 8;
      }

      // Normal Paragraph
      else if (line.trim() !== "") {

        const wrapped = doc.splitTextToSize(line, 170);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(40, 40, 40);

        doc.text(wrapped, 20, y);

        y += wrapped.length * 6;
      }

    });

    y += 10;

    if (y > 260) {
      doc.addPage();
      y = 20;
    }

    doc.setDrawColor(220);
    doc.line(15, y, 195, y);

    y += 10;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(37, 99, 235);

    doc.text(
      "Generated by ScholarAI",
      105,
      y,
      {
        align: "center",
      }
    );

    y += 8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(120);

    doc.text(
      "Powered by Google Gemini AI • React • Tailwind CSS",
      105,
      y,
      {
        align: "center",
      }
    );

    const totalPages = doc.getNumberOfPages();

    for (let i = 1; i <= totalPages; i++) {

      doc.setPage(i);

      doc.setFontSize(9);

      doc.setTextColor(120);

      doc.text(
        `Generated on: ${new Date().toLocaleDateString()}`,
        15,
        290
      );

      doc.text(
        `Page ${i} of ${totalPages}`,
        180,
        290
      );
    }

    doc.save("ScholarAI_Recommendation_Report.pdf");
  };

    if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-xl shadow-lg p-10 text-center">

          <h2 className="text-3xl font-bold text-red-600 mb-4">
            No Student Profile Found
          </h2>

          <p className="text-gray-600 mb-6">
            Please fill your profile first.
          </p>

          <Link
            to="/profile"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Go to Profile
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-10 px-5">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-extrabold text-blue-700">
            🎓 ScholarAI
          </h1>

          <p className="text-xl text-gray-600 mt-3">
            Personalized Scholarship & Government Scheme Finder
          </p>

        </div>

        <StudentProfileCard student={state} />

        {!loading && (
          <StatsCards recommendations={aiResponse} />
        )}

        <div className="mt-10">

          {loading ? (

            <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

              <div className="flex justify-center">

                <div className="w-20 h-20 border-8 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

              </div>

              <h2 className="text-3xl font-bold text-blue-700 mt-8">
                🤖 AI is finding the best scholarships...
              </h2>

              <p className="text-gray-500 text-lg mt-4">
                Please wait while Gemini AI analyzes your profile.
              </p>

            </div>

          ) : (

            <>
              <RecommendationCard content={aiResponse} />

              <div className="flex flex-wrap justify-center gap-4 mt-8">

                <button
                  onClick={copyToClipboard}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
                >
                  📋 Copy Recommendations
                </button>

                <button
                  onClick={downloadPDF}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
                >
                  📄 Download PDF
                </button>

                <button
                  onClick={() => window.location.reload()}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
                >
                  🔄 Generate Again
                </button>

                <Link
                  to="/profile"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
                >
                  ✏️ Edit Profile
                </Link>

                <Link
                  to="/"
                  className="bg-gray-700 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
                >
                  🏠 Home
                </Link>

              </div>

            </>
          )}

        </div>

        <div className="mt-14">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl text-white p-8">

            <h2 className="text-3xl font-bold mb-4">
              🚀 Powered by ScholarAI
            </h2>

            <p className="leading-8 text-blue-100">
              ScholarAI uses <strong>Google Gemini AI</strong> to analyze
              your profile and recommend the most relevant scholarships
              and government schemes based on your education, category,
              family income, state, disability status and eligibility.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <div className="bg-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2">
                  🤖 AI Powered
                </h3>

                <p className="text-blue-100">
                  Personalized scholarship recommendations using Google
                  Gemini AI.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2">
                  🎯 Accurate Matching
                </h3>

                <p className="text-blue-100">
                  Recommendations based on your complete student profile.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <h3 className="font-bold text-xl mb-2">
                  🔒 Secure
                </h3>

                <p className="text-blue-100">
                  Your information is used only to generate scholarship
                  recommendations. We do not permanently store your personal
                  information.
                </p>
              </div>

            </div>

            <div className="border-t border-white/20 mt-8 pt-6 text-center">

              <p className="text-blue-100">
                ❤️ Built with React • Tailwind CSS • Google Gemini AI
              </p>

              <p className="text-blue-200 mt-2 text-sm">
                © 2026 ScholarAI. Helping students discover scholarships
                faster with Artificial Intelligence.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Recommendations;