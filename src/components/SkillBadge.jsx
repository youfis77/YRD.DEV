export default function SkillBadge({ name, highlighted = false }) {
  return (
    <span
      className="font-mono text-[12px] px-3 py-1 border transition-all duration-300 hover:scale-105"
      style={{ 
        color: highlighted ? 'var(--accent-green)' : 'var(--text-muted)',
        borderColor: highlighted ? 'rgba(0,255,170,0.2)' : 'var(--border-subtle)'
      }}
    >
      {name}
    </span>
  )
}
