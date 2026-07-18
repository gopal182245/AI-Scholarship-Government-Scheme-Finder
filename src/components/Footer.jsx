function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white py-16 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Logo & Description */}
        <div>
          <h2 className="text-4xl font-bold text-blue-400">
            ScholarAI
          </h2>

          <p className="mt-5 text-gray-300 leading-8">
            ScholarAI is an AI-powered platform that helps students discover
            scholarships and government schemes based on their education,
            annual income, category, state, minority status, disability, and
            eligibility using Google Gemini AI.
          </p>

          <div className="flex gap-4 mt-6">

            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              🤖 AI Powered
            </span>

            <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-medium">
              🎓 Student First
            </span>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-4 text-gray-300">

            <li>
              <a
                href="#home"
                className="hover:text-blue-400 transition duration-300"
              >
                🏠 Home
              </a>
            </li>

            <li>
              <a
                href="#features"
                className="hover:text-blue-400 transition duration-300"
              >
                ✨ Features
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition duration-300"
              >
                ℹ️ About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 transition duration-300"
              >
                📞 Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold">
            Contact Information
          </h3>

          <div className="mt-6 space-y-5 text-gray-300">

            <a
              href="mailto:drgopalkulkarni41@gmail.com"
              className="block hover:text-blue-400 transition duration-300"
            >
              📧 drgopalkulkarni41@gmail.com
            </a>

            <p>
              📍 Bengaluru, Karnataka, India
            </p>

            <p>
              🤖 Powered by Google Gemini AI
            </p>

            <p>
              🎓 AI Scholarship & Government Scheme Finder
            </p>

          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4">

        <p className="text-center md:text-left">
          © 2026 <span className="font-semibold text-white">ScholarAI</span>.
          All Rights Reserved.
        </p>

        <p className="text-center">
          Helping students discover scholarships and government schemes with
          Artificial Intelligence.
        </p>

      </div>
    </footer>
  );
}

export default Footer;