import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isNearFooter, setIsNearFooter] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Check if near footer (within 200px of bottom)
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = window.innerHeight
      const scrollPosition = window.scrollY + clientHeight
      
      if (scrollPosition >= scrollHeight - 200) {
        setIsNearFooter(true)
      } else {
        setIsNearFooter(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed right-6 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${
        isNearFooter ? 'bottom-28' : 'bottom-6'
      }`}
      style={{ 
        background: 'var(--accent-green)', 
        color: '#080B10' 
      }}
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  )
}
