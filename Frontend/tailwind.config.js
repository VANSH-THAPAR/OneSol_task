import forms from "@tailwindcss/forms"
import containerQueries from "@tailwindcss/container-queries"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#3B82F6", 
        "primary-dark": "#2563EB",
        "hero-bg": "#EFF6FF",
        "metric-bg": "#EFF6FF",
        "integration-bg": "#F8FAFC",
        "flow-bg": "#000000",
        "flow-card": "#404040",
        "footer-bg": "#000000",
        "footer-card": "#404040",
        "surface-light": "#FFFFFF",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "sans": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "xl": "0.75rem", 
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      }
    },
  },
  plugins: [forms, containerQueries],
}