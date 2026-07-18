import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-blue-600">
            ScholarAI
          </h1>

          <p className="text-sm text-gray-500">
            AI Scholarship & Government Scheme Finder
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b hover:bg-blue-50"
          >
            🏠 Home
          </a>

          <a
            href="#features"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b hover:bg-blue-50"
          >
            ✨ Features
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 border-b hover:bg-blue-50"
          >
            ℹ️ About
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block px-6 py-4 hover:bg-blue-50"
          >
            📞 Contact
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;