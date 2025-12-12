import type React from "react"

interface SectionProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  button?: React.ReactNode
  className?: string
  variant?: "light" | "gradient"
  id?: string
}

export function Section({ children, title, subtitle, className = "", variant = "light", id, button }: SectionProps) {
  const bgVariants = {
    light: "bg-white",
    gradient: "bg-purple-gradient border-y border-purple-primary/20",
  }

  return (
    <section id={id} className={`py-16 md:py-20 px-4 md:px-8 ${bgVariants[variant]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {title && (
          <div className="mb-12 md:mb-16 flex flex-row justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
              {subtitle && <div className="text-lg text-gray-600">{subtitle}</div>}
            </div>
            {button}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
