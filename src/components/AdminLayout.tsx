"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { Menu, X, LogOut, LayoutDashboard, User, Zap, Briefcase, FolderOpen, Mail } from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
  title: string
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()
  const { logout } = useAuth()

  const navItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Manage About", path: "/admin/about", icon: User },
    { label: "Manage Skills", path: "/admin/skills", icon: Zap },
    { label: "Manage Experiences", path: "/admin/experiences", icon: Briefcase },
    { label: "Manage Projects", path: "/admin/projects", icon: FolderOpen },
    { label: "Contact Details", path: "/admin/contact", icon: Mail },
  ]

  const handleLogout = () => {
    logout()
    navigate("/admin/login")
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <div className="min-h-screen flex bg-white">
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white border-r-2 border-gray-200 transition-all duration-300 flex flex-col fixed h-screen z-40`}
      >
        {/* Header */}
        <div className="p-3.5 border-b-2 border-gray-200">
          <div className="flex items-center justify-between">
            <div className={`text-2xl font-bold text-purple-primary ${!sidebarOpen && "hidden"}`}>Admin</div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 bg-[#f1ecf3] rounded-lg transition text-gray-700 hover:text-gray-900"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive(item.path)
                    ? "bg-purple-primary text-white shadow-lg shadow-purple-primary/20"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                title={!sidebarOpen ? item.label : ""}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium truncate flex justify-center">{item.label}</span>}
              </button>
            )
          })}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t-2 border-gray-200">
          <button
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-lg transition ${
              sidebarOpen ? "justify-between" : "justify-center"
            }`}
            title={!sidebarOpen ? "Logout" : ""}
          >
            <LogOut className="w-5 h-5" />
            {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`}>
        {/* Topbar */}
        <div className="bg-white border-b-2 border-gray-200 sticky top-0 z-30">
          <div className="px-6 md:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-primary">{title}</h1>
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm">Welcome back!</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 min-h-[calc(100vh-80px)]">{children}</div>
      </div>
    </div>
  )
}
