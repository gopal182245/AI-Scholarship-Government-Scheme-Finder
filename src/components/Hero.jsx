import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            🤖 Powered by Google Gemini AI
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          Discover the Right
          <span className="block text-yellow-300 mt-2">
            Scholarships & Government Schemes
          </span>
          <span className="block mt-2">
            with Artificial Intelligence
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-blue-100 leading-7 md:leading-8">
          ScholarAI uses Google Gemini AI to recommend scholarships and
          government schemes based on your education, state, annual income,
          category, disability status, and eligibility criteria.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/profile"
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:bg-gray-100 hover:scale-105 transition duration-300"
          >
            🚀 Get Started
          </Link>

          <a
            href="#features"
            className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-700 transition duration-300"
          >
            📖 Learn More
          </a>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">🎓</div>

            <h3 className="text-xl font-bold">
              Scholarship Finder
            </h3>

            <p className="text-blue-100 mt-3">
              Discover scholarships that match your profile within seconds.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">🏛️</div>

            <h3 className="text-xl font-bold">
              Government Schemes
            </h3>

            <p className="text-blue-100 mt-3">
              Explore central and state government welfare schemes using AI.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition duration-300">
            <div className="text-4xl mb-4">⚡</div>

            <h3 className="text-xl font-bold">
              Instant AI Analysis
            </h3>

            <p className="text-blue-100 mt-3">
              Get eligibility checks, benefits, documents, and official links instantly.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;