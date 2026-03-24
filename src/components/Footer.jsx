export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="mt-12 px-6 md:px-12 py-6 transition-colors duration-300"
      style={{ 
        borderTop: '1px solid var(--border-subtle)' 
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p 
          className="font-mono text-[11px] transition-colors duration-300"
          style={{ color: 'var(--text-dim)' }}
        >
          © {currentYear} Yousif Ramadan Dahi — YRD.dev
        </p>
        
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/youfis77"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] transition-colors duration-300 hover:opacity-80"
            style={{ color: 'var(--text-dim)' }}
          >
            github.com/youfis77
          </a>
          <a
            href="https://linkedin.com/in/yousif-ramadan-dahi"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] transition-colors duration-300 hover:opacity-80"
            style={{ color: 'var(--text-dim)' }}
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/201010284573"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] transition-colors duration-300 hover:opacity-80"
            style={{ color: 'var(--text-dim)' }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
