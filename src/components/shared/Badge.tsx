import type React from "react"

interface BadgeProps {
  children: React.ReactNode,
  className?: string,
  variant?: "light" | "dark" | "success" | "error"
}

export function Badge({ children, className = "", variant = "light" }: BadgeProps) {
  const variants = {
    light: "bg-purple-primary/10 text-purple-primary border border-purple-primary/20",
    dark: "bg-blue-600/20 text-blue-300 border border-blue-500/30",
    success: "bg-green-100 text-green-700 border border-green-300",
    error: "bg-red-100 text-red-700 border border-red-300",
  }

  return (
    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${variants[variant]} ${className}`}>{children}</span>
  )
}
