"use client"

import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, MessageCircle } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLetsTalk = () => {
    window.dispatchEvent(new CustomEvent("openChat"))
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className="text-3xl font-bold text-purple-primary">Isha.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" className="text-gray-700 hover:text-purple-primary transition font-medium text-sm">
            Home
          </NavLink>
          <NavLink to="/projects" className="text-gray-700 hover:text-purple-primary transition font-medium text-sm">
            Projects
          </NavLink>
          <NavLink to="/contact" className="text-gray-700 hover:text-purple-primary transition font-medium text-sm">
            Contact
          </NavLink>
        </div>

        {/* Right Side - CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleLetsTalk}
            className="px-6 py-2.5 bg-purple-primary text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Let's Talk
          </button>
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
