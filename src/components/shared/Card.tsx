import type React from "react"

interface CardProps {
  children: React.ReactNode
  variant?: "light" | "dark" | "gradient"
  className?: string
  hoverable?: boolean
}

export function Card({ children, variant = "light", className = "", hoverable = false }: CardProps) {
  const baseClasses = "rounded-xl border transition-all"

  const variants = {
    light: "bg-white border-gray-200 shadow-md",
    dark: "bg-slate-800/50 border-slate-700/50 shadow-lg",
    gradient: "bg-gradient-to-br from-slate-800/30 to-slate-900/30 border-slate-700/50 shadow-lg",
  }

  const hoverClasses = hoverable ? "hover:shadow-lg hover:border-purple-primary/50 hover:scale-101" : ""

  return <div className={`${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`}>{children}</div>
}
