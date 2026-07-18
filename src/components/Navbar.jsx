function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            ScholarAI
          </h1>

          <p className="text-sm text-gray-500">
            AI Scholarship & Government Scheme Finder
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-gray-700 font-medium">

          <a
            href="#home"
            className="hover:text-blue-600 transition duration-300"
          >
            Home
          </a>

          <a
            href="#features"
            className="hover:text-blue-600 transition duration-300"
          >
            Features
          </a>

          <a
            href="#about"
            className="hover:text-blue-600 transition duration-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition duration-300"
          >
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;