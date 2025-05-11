// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold">
          My Portfolio
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-300">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}