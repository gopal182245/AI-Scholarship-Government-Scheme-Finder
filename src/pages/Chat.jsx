import { Link } from "react-router-dom";

function Chat() {
  const suggestions = [
    "🎓 Scholarships for Engineering Students",
    "💰 Scholarships Below ₹2 Lakh Income",
    "🏛️ Karnataka Government Schemes",
    "📄 Documents Required for Scholarships",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-14">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-12">

          <div className="inline-flex items-center bg-blue-100 text-blue-700 font-semibold px-5 py-2 rounded-full mb-6">
            🤖 Powered by Google Gemini AI
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
            AI Scholarship Assistant
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Ask anything about scholarships, government schemes, eligibility,
            application process, required documents, or financial assistance.
            Our AI Assistant is here to help you instantly.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">

          <div className="flex items-start gap-4 mb-8">

            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-2xl text-white">
              🤖
            </div>

            <div className="bg-blue-50 rounded-2xl p-5 max-w-3xl">
              <p className="text-gray-800 leading-7">
                Hello! 👋 I'm your AI Scholarship Assistant.
                <br />
                <br />
                I can help you find scholarships, explain eligibility,
                guide you through government schemes, and answer questions
                related to education funding.
              </p>
            </div>

          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Try asking...
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-10">

            {suggestions.map((item, index) => (
              <button
                key={index}
                className="text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-400 rounded-xl p-4 transition duration-300"
              >
                {item}
              </button>
            ))}

          </div>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Ask your question..."
              className="flex-1 px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl font-semibold transition duration-300">
              Send
            </button>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl">⚡</div>

            <h3 className="text-xl font-bold mt-4">
              Instant Answers
            </h3>

            <p className="text-gray-600 mt-3">
              Receive AI-generated responses within seconds.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl">🎯</div>

            <h3 className="text-xl font-bold mt-4">
              Personalized Guidance
            </h3>

            <p className="text-gray-600 mt-3">
              Get recommendations based on your profile and eligibility.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="text-4xl">🔒</div>

            <h3 className="text-xl font-bold mt-4">
              Secure & Reliable
            </h3>

            <p className="text-gray-600 mt-3">
              Your conversations remain private and secure.
            </p>
          </div>

        </div>

        <div className="text-center mt-12">

          <Link
            to="/profile"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            Go Back to Profile
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Chat;