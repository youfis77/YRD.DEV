import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const filters = ["All", "React", "Next.js", "HTML+CSS", "Python"]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => {
        if (activeFilter === "React") return project.tech.includes("React")
        if (activeFilter === "Next.js") return project.tech.includes("Next.js")
        if (activeFilter === "HTML+CSS") return project.tech.includes("HTML") && project.tech.includes("CSS")
        if (activeFilter === "Python") return project.tech.includes("Python")
        return true
      })

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-[length:40px_40px]"
          style={{ 
            backgroundImage: `
              linear-gradient(var(--accent-green), transparent 1px),
              linear-gradient(90deg, var(--accent-green), transparent 1px)
            `,
            opacity: 0.03
          }} 
        />
        <div 
          className="absolute rounded-full pointer-events-none"
          style={{ 
            width: '500px', 
            height: '500px',
            background: 'radial-gradient(circle, var(--accent-green) 0%, transparent 70%)',
            top: '-100px', 
            left: '-100px',
            opacity: 0.07
          }} 
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-20">
        {/* Header */}
        <div className="mb-8">
          <span 
            className="font-mono text-[12px] opacity-50"
            style={{ color: 'var(--accent-green)' }}
          >
            03
          </span>
          <h1 
            className="font-syne text-[clamp(36px,5vw,48px)] font-extrabold mt-4 tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Projects
          </h1>
          <p 
            className="font-syne text-[16px] mt-4 max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            A collection of projects showcasing my skills in web development, from full-stack applications to responsive websites.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="font-mono text-[12px] px-4 py-2 border transition-all"
              style={{ 
                background: activeFilter === 'var(--accent-green)' ? 'var(--accent-green)' : 'transparent',
                borderColor: activeFilter === 'var(--accent-green)' ? 'var(--accent-green)' : 'var(--border-subtle)',
                color: activeFilter === 'var(--accent-green)' ? '#080B10' : 'var(--text-muted)',
                fontWeight: activeFilter === 'var(--accent-green)' ? 'bold' : 'normal'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p 
              className="font-mono text-[14px]"
              style={{ color: 'var(--text-muted)' }}
            >
              No projects found for this filter.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
