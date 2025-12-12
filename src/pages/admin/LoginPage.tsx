"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("admin@example.com")
  const [password, setPassword] = useState("admin123")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await login(email, password)
      navigate("/admin/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 space-y-8 shadow-lg hover-purple-lift">
          <div className="space-y-3 text-center">
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-purple-primary rounded-xl flex items-center justify-center">
                <Lock className="text-white" size={24} />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 text-sm md:text-base">Manage your portfolio with ease</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm animate-fade-in">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-primary focus:bg-white transition"
                  placeholder="admin@example.com"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-900">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-purple-primary focus:bg-white transition"
                  placeholder="••••••••"
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-purple-primary hover:bg-purple-primary/90 text-white font-semibold rounded-lg transition disabled:opacity-50 duration-300"
            >
              {loading ? "Logging in..." : "Sign In"}
            </button>
          </form>

          <div className="bg-purple-primary/5 border border-purple-primary/20 rounded-lg p-4 md:p-5 text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-3">Demo Credentials</p>
            <div className="space-y-2">
              <p className="text-xs md:text-sm">
                <span className="font-medium">Email:</span> admin@example.com
              </p>
              <p className="text-xs md:text-sm">
                <span className="font-medium">Password:</span> admin123
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
