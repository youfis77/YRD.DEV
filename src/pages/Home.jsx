import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { projects, skills } from '../data/projects'

export default function Home() {
  const [displayText, setDisplayText] = useState('')
  const fullName = "Yousif Ramadan Dahi"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const featuredProjects = projects.slice(0, 3)

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
        <div 
          className="absolute rounded-full pointer-events-none"
          style={{ 
            width: '400px', 
            height: '400px',
            background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)',
            top: '200px', 
            right: '-80px',
            opacity: 0.06
          }} 
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 pt-20 pb-12 max-w-[900px]">
        <div 
          className="font-mono text-[13px] mb-3 opacity-70 animate-fade-in-up"
          style={{ color: 'var(--accent-blue)' }}
        >
          $ whoami
        </div>
        <div 
          className="font-mono text-[12px] uppercase tracking-[2px] flex items-center gap-2.5 mb-7 animate-fade-in-up delay-100"
          style={{ color: 'var(--accent-green)' }}
        >
          <span className="block w-6 h-[1px]" style={{ background: 'var(--accent-green)' }} />
          Available for work
        </div>
        <h1 
          className="font-syne text-[clamp(36px,5vw,64px)] font-extrabold leading-tight mb-2 tracking-tight animate-fade-in-up delay-200"
          style={{ color: 'var(--text-primary)' }}
        >
          {displayText}<span style={{ color: 'var(--accent-green)' }}>.</span>
        </h1>
        <p 
          className="font-mono text-[16px] my-4 tracking-wide animate-fade-in-up delay-300"
          style={{ color: 'var(--text-muted)' }}
        >
          Frontend-Focused <span style={{ color: 'var(--accent-blue)' }}>Full Stack Developer</span>
        </p>
        <p 
          className="font-syne text-[17px] max-w-[540px] leading-relaxed mb-11 animate-fade-in-up delay-400"
          style={{ color: 'var(--text-secondary)' }}
        >
          Building digital products from Sheikh Zayed, Egypt. Passionate about clean code, real estate tech, and the future of AI engineering.
        </p>
        <div className="flex gap-4 flex-wrap animate-fade-in-up delay-500">
          <Link
            to="/projects"
            className="font-mono text-[13px] px-8 py-3.5 border-none font-bold uppercase tracking-widest hover:opacity-85 transition-opacity btn-glow"
            style={{ background: 'var(--accent-green)', color: '#080B10' }}
          >
            View Projects
          </Link>
          <button 
            className="font-mono text-[13px] px-8 py-3.5 bg-transparent border uppercase tracking-widest hover:opacity-80 transition-all"
            style={{ 
              borderColor: 'var(--border-subtle)', 
              color: 'var(--text-secondary)' 
            }}
          >
            Download CV
          </button>
        </div>
      </section>

      {/* Divider */}
      <div 
        className="relative z-10 h-[1px] mx-6 md:mx-12" 
        style={{ background: 'var(--border-subtle)' }}
      />

      {/* Tech Stack Bar */}
      <div 
        className="relative z-10 px-6 md:px-12 py-6 flex flex-wrap items-center gap-8 transition-colors duration-300"
        style={{ borderBottom: '1px solid var(--border-subtle)' }}
      >
        <span 
          className="font-mono text-[11px] uppercase tracking-[2px] whitespace-nowrap"
          style={{ color: 'var(--text-dim)' }}
        >
          Stack
        </span>
        <div className="flex flex-wrap gap-5 items-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="font-mono text-[12px] px-3 py-1 border transition-all duration-300 hover:scale-105"
              style={{ 
                color: skill.highlighted ? 'var(--accent-green)' : 'var(--text-muted)',
                borderColor: skill.highlighted ? 'rgba(0,255,170,0.2)' : 'var(--border-subtle)'
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Featured Projects Section */}
      <section className="relative z-10 px-6 md:px-12 py-16">
        <div className="flex items-baseline gap-4 mb-9">
          <span 
            className="font-mono text-[12px] opacity-50"
            style={{ color: 'var(--accent-green)' }}
          >
            01
          </span>
          <h2 
            className="font-syne text-[22px] font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Featured Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Strip */}
      <div 
        className="relative z-10 mx-6 md:mx-12 mb-12 px-8 py-8 border flex flex-wrap items-center justify-between gap-5 transition-colors duration-300 hover:border-opacity-80"
        style={{ 
          background: 'rgba(0, 255, 170, 0.03)',
          borderColor: 'var(--accent-green)',
          opacity: 0.9
        }}
      >
        <div>
          <h3 
            className="font-syne text-[18px] font-bold mb-1.5"
            style={{ color: 'var(--text-primary)' }}
          >
            Let's build something.
          </h3>
          <p className="font-mono text-[12px]" style={{ color: 'var(--text-muted)' }}>
            youseefgamer164@gmail.com &nbsp;·&nbsp; wa.me/201010284573
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <a
            href="https://github.com/youfis77"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] px-5 py-2.5 border transition-all"
            style={{ 
              borderColor: 'var(--border-subtle)', 
              color: 'var(--text-muted)' 
            }}
          >
            GITHUB
          </a>
          <Link
            to="/contact"
            className="font-mono text-[12px] px-5 py-2.5 border font-bold hover:opacity-85 transition-opacity btn-glow"
            style={{ 
              background: 'var(--accent-green)', 
              borderColor: 'var(--accent-green)',
              color: '#080B10' 
            }}
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div>
  )
}
