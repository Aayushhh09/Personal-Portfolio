import { useState } from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          Aayush<span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-blue-400 transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="contact"
          className="hidden md:block bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <link
            to="/contact"
            className="block bg-blue-500 px-4 py-2 rounded-lg text-center"
          >
            Hire Me
          </link>
        </ul>
      )}
    </nav>
  );
}