import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import useDarkMode from '../hooks/useDarkMode'

const navLinks = [
  { path: '/', label: '~/home' },
  { path: '/about', label: '~/about' },
  { path: '/projects', label: '~/projects' },
  { path: '/contact', label: '~/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useDarkMode()

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300"
      style={{ 
        background: 'var(--bg-primary)', 
        borderColor: 'var(--border-accent)' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-mono text-lg font-bold transition-colors duration-300"
          style={{ color: 'var(--accent-green)' }}
        >
          YRD<span style={{ color: 'var(--accent-green)', opacity: 0.35 }}>.dev</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className="font-mono text-[13px] tracking-wide transition-colors duration-200"
                style={{ 
                  color: location.pathname === link.path 
                    ? 'var(--accent-green)' 
                    : 'var(--text-muted)' 
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="font-mono text-[12px] px-5 py-2 border transition-all duration-200 tracking-widest"
            style={{ 
              borderColor: 'var(--accent-green)',
              color: 'var(--accent-green)',
              background: 'transparent'
            }}
          >
            HIRE ME
          </Link>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center border transition-all"
            style={{ 
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-muted)'
            }}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button with Animation */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                isOpen ? 'top-2 rotate-45' : 'top-0'
              }`}
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <span 
              className={`absolute left-0 top-2 w-6 h-0.5 transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
            <span 
              className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                isOpen ? 'top-2 -rotate-45' : 'top-4'
              }`}
              style={{ backgroundColor: 'var(--text-primary)' }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-16 left-0 right-0 px-6 py-4 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ 
          background: 'var(--bg-primary)',
          borderColor: 'var(--border-accent)'
        }}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-mono text-[14px] block py-2"
                style={{ 
                  color: location.pathname === link.path 
                    ? 'var(--accent-green)' 
                    : 'var(--text-muted)' 
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="font-mono text-[12px] px-4 py-2 inline-block mt-2 border"
              style={{ 
                borderColor: 'var(--accent-green)',
                color: 'var(--accent-green)'
              }}
            >
              HIRE ME
            </Link>
            
            {/* Mobile Theme Toggle */}
            <button
              onClick={() => {
                toggleTheme()
                setIsOpen(false)
              }}
              className="mt-2 w-9 h-9 flex items-center justify-center border"
              style={{ 
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-muted)'
              }}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
