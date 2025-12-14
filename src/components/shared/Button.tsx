import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "dark" | "ghost"
  size?: "sm" | "md" | "lg"
  icon?: React.ReactNode
  fullWidth?: boolean
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-semibold rounded-lg transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50"

  const variants = {
    primary: "bg-purple-primary hover:bg-purple-primary/90 text-white shadow-md hover:shadow-lg hover:scale-105",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 shadow-md hover:shadow-lg",
    outline: "border-2 border-purple-primary text-purple-primary hover:bg-purple-primary/5",
    dark: "bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg",
    ghost: "text-purple-primary hover:bg-purple-primary/10",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}
