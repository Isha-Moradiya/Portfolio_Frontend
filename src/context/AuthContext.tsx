"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import { encryptData, decryptData } from "../utils/crypto"

export interface AuthContextType {
  user: any
  token: string | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is already logged in on mount
  useEffect(() => {
    const encryptedAuth = localStorage.getItem("auth")
    if (encryptedAuth) {
      try {
        const authData = decryptData(encryptedAuth)
        setUser(authData.user)
        setToken(authData.token)
        setIsAuthenticated(true)
      } catch (error) {
        console.log("[v0] Auth decryption failed, clearing storage")
        localStorage.removeItem("auth")
      }
    }
  }, [])

  const login = async (email: string, password: string) => {
    // Demo login - replace with real API call
    if (email === "admin@example.com" && password === "admin123") {
      const userData = {
        id: 1,
        email,
        name: "Admin User",
      }
      const demoToken = "demo-token-" + Date.now()

      const authData = { user: userData, token: demoToken }
      const encryptedAuth = encryptData(authData)

      localStorage.setItem("auth", encryptedAuth)
      setUser(userData)
      setToken(demoToken)
      setIsAuthenticated(true)
    } else {
      throw new Error("Invalid credentials")
    }
  }

  const logout = () => {
    localStorage.removeItem("auth")
    setUser(null)
    setToken(null)
    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}
