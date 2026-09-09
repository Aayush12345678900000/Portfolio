import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row bg-gray-800 justify-between items-center p-4 sticky top-0 z-50 shadow-md">
      <a href="#home" className="text-white text-xl font-medium cursor-pointer mb-2 md:mb-0">
        Aayush Portfolio
      </a>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden text-fuchsia-400 focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? "✕" : "☰"}
      </button>
      <div
        className={`flex flex-col md:flex-row gap-4 px-8 ${open ? "flex" : "hidden md:flex"}`}
      >
        <a href="#home" className="hover:text-fuchsia-300 transition-colors cursor-pointer">
          Home
        </a>
        <a href="#about" className="hover:text-fuchsia-300 transition-colors cursor-pointer">
          About
        </a>
        <a href="#skills" className="hover:text-fuchsia-300 transition-colors cursor-pointer">
          Skills
        </a>
        <a href="#projects" className="hover:text-fuchsia-300 transition-colors cursor-pointer">
          Projects
        </a>
        <a href="#contact" className="hover:text-fuchsia-300 transition-colors cursor-pointer">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;