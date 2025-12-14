"use client"

import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, FileDown } from "lucide-react"
import { Button } from "./shared"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const headerBgClass = isHome
    ? scrolled
      ? "bg-white shadow-md"
      : "bg-linear-to-r from-pink-100 via-purple-100 to-cyan-50"
    : "bg-white shadow-md";


  const downloadResume = () => {
  }


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className="text-3xl font-bold text-purple-primary">Isha.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative text-sm font-semibold transition
            ${isActive
                ? "text-purple-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-primary"
                : "text-gray-700 hover:text-purple-primary"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `relative text-sm font-semibold transition
            ${isActive
                ? "text-purple-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-primary"
                : "text-gray-700 hover:text-purple-primary"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative text-sm font-semibold transition
            ${isActive
                ? "text-purple-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-purple-primary"
                : "text-gray-700 hover:text-purple-primary"
              }`
            }
          >
            Contact
          </NavLink>

        </div>

        {/* Right Side - CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button size="md" onClick={downloadResume} className="shadow-lg">
            <FileDown size={20} />
            Download CV
          </Button>
          <Link to="/admin/login" className="text-gray-600 hover:text-purple-primary transition text-sm font-medium">
            Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4 flex flex-col gap-3">
          <NavLink to="/" className="text-gray-700 hover:text-purple-primary transition font-medium py-2">
            Home
          </NavLink>
          <NavLink to="/projects" className="text-gray-700 hover:text-purple-primary transition font-medium py-2">
            Projects
          </NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-purple-primary transition font-medium py-2">
            Contact
          </NavLink>
        </div>
      )}
    </header>
  )
}
