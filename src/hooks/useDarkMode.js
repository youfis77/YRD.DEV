import { useState, useEffect } from 'react'

export default function useDarkMode() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('yrd-theme')
      if (savedTheme) {
        return savedTheme
      }
    }
    return 'dark'
  })

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('yrd-theme')
    const initialTheme = savedTheme || 'dark'
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem('yrd-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return { theme, toggleTheme }
}
