"use client"

import { createContext, useContext, useEffect, useState } from "react"
import type { Theme, ThemeProviderProps, ThemeProviderState } from "@/types"

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "portfolio-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme
    
    try {
      const stored = localStorage.getItem(storageKey) as Theme
      return stored || defaultTheme
    } catch {
      return defaultTheme
    }
  })

  // Apply theme immediately on mount
  useEffect(() => {
    
    const root = document.documentElement
    const applyTheme = (currentTheme: Theme) => {
      root.classList.remove("light", "dark")
      
      if (currentTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        root.classList.add(systemTheme)
      } else {
        root.classList.add(currentTheme)
      }
    }

    // Apply current theme immediately
    applyTheme(theme)
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system")
      }
    }
    
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme)
      
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(storageKey, newTheme)
        } catch {
          // Handle localStorage errors gracefully
        }
      }
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
