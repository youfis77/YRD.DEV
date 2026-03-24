export default function ProjectCard({ 
  title, 
  description, 
  tech = [], 
  githubLink, 
  liveLink, 
  tag,
  accentColor = 'green'
}) {
  const accentColors = {
    green: 'var(--accent-green)',
    blue: 'var(--accent-blue)',
    amber: '#F59E0B',
  }

  return (
    <div 
      className="border p-7 relative overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col"
      style={{ 
        background: 'rgba(255,255,255,0.02)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      {/* Accent Bar */}
      <div 
        className="absolute top-0 left-0 h-full transition-all duration-300 group-hover:w-[4px] w-[3px]"
        style={{ background: accentColors[accentColor] }}
      />
      
      {/* Tag */}
      <div 
        className="font-mono text-[10px] uppercase tracking-widest mb-3"
        style={{ color: 'var(--text-dim)' }}
      >
        {tag}
      </div>
      
      {/* Title */}
      <h3 
        className="font-syne text-[17px] font-bold mb-2 tracking-tight transition-colors group-hover:text-[var(--accent-green)]"
        style={{ color: 'var(--text-primary)' }}
      >
        {title}
      </h3>
      
      {/* Description */}
      <p 
        className="font-syne text-[13px] leading-relaxed mb-4 flex-grow"
        style={{ color: 'var(--text-muted)' }}
      >
        {description}
      </p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t, index) => (
          <span
            key={index}
            className="font-mono text-[10px] px-2 py-1 border transition-all duration-200 hover:scale-105"
            style={{ 
              background: 'rgba(255,255,255,0.04)',
              color: 'var(--text-muted)',
              borderColor: 'var(--border-subtle)'
            }}
          >
            {t}
          </span>
        ))}
      </div>
      
      {/* Links */}
      <div className="flex gap-4 pt-2" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] transition-colors flex items-center gap-1 hover:opacity-80"
            style={{ color: 'var(--text-muted)' }}
          >
            &lt;Code /&gt;
          </a>
        )}
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] transition-colors flex items-center gap-1 hover:opacity-80"
            style={{ color: 'var(--text-muted)' }}
          >
            Demo →
          </a>
        )}
      </div>
    </div>
  )
}
