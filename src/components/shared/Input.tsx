import type React from "react"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  variant?: "light" | "dark"
}

export function Input({ label, error, variant = "light", className = "", ...props }: InputProps) {
  const variants = {
    light: "bg-white border-gray-200 focus:border-purple-primary text-gray-900 placeholder-gray-400",
    dark: "bg-slate-700/50 border-slate-600/50 focus:border-blue-500 text-white placeholder-slate-400",
  }

  return (
    <div className="space-y-2 w-full">
      {label && <label className="block text-sm font-semibold text-gray-900 dark:text-slate-300">{label}</label>}
      <input
        className={`w-full px-4 py-2 border rounded-lg transition outline-none focus:outline-none ${variants[variant]} ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  )
}
