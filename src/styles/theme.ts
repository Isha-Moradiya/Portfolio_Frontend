// Unified Design System - Colors, Typography, Spacing
export const theme = {
  colors: {
    primary: "#8B5CF6", // Purple
    primaryLight: "#A78BFA",
    primaryDark: "#7C3AED",

    // Neutral
    background: "#FFFFFF",
    backgroundDark: "#0F172A",
    foreground: "#1E293B",

    // Semantic
    success: "#10B981",
    error: "#EF4444",
    warning: "#F59E0B",

    // Border & Divider
    border: "#E2E8F0",
    borderDark: "#334155",
  },

  typography: {
    heading1: "text-4xl md:text-5xl font-bold",
    heading2: "text-3xl md:text-4xl font-bold",
    heading3: "text-2xl md:text-3xl font-bold",
    heading4: "text-xl md:text-2xl font-bold",
    body: "text-base leading-relaxed",
    bodySmall: "text-sm text-gray-600",
    label: "text-sm font-semibold",
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "2.5rem",
    "3xl": "3rem",
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },

  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
  },
}
