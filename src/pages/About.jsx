import SkillBadge from '../components/SkillBadge'
import { skills, interests } from '../data/projects'

export default function About() {
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

      <div className="relative z-10 px-6 md:px-12 py-20 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <span 
            className="font-mono text-[12px] opacity-50"
            style={{ color: 'var(--accent-green)' }}
          >
            02
          </span>
          <h1 
            className="font-syne text-[clamp(36px,5vw,48px)] font-extrabold mt-4 tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            About Me
          </h1>
        </div>

        {/* Bio Section */}
        <section className="mb-12">
          <h2 
            className="font-syne text-[18px] font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Who I Am
          </h2>
          <p 
            className="font-syne text-[16px] leading-relaxed mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            I'm <strong style={{ color: 'var(--text-primary)' }}>Yousif Ramadan Dahi (YRD)</strong>, a second-year IT student at <strong style={{ color: 'var(--accent-green)' }}>WE Applied Technology School</strong> in Egypt.
          </p>
          <p 
            className="font-syne text-[16px] leading-relaxed mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            I'm a <strong style={{ color: 'var(--accent-blue)' }}>Frontend-Focused Full Stack Developer</strong> passionate about building clean, performant web applications. My journey started with curiosity about how websites work, and now I'm building real products while exploring the intersection of web development and AI.
          </p>
          <p 
            className="font-syne text-[16px] leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            I specialize in the <strong style={{ color: 'var(--text-primary)' }}>MERN stack</strong> (MongoDB, Express, React, Node.js) with strong skills in <strong style={{ color: 'var(--text-primary)' }}>Tailwind CSS</strong>, and I'm constantly learning new technologies to stay ahead.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 
            className="font-syne text-[18px] font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Education
          </h2>
          <div 
            className="border p-6"
            style={{ 
              background: 'rgba(255,255,255,0.02)',
              borderColor: 'var(--border-subtle)'
            }}
          >
            <div 
              className="font-mono text-[10px] uppercase tracking-widest mb-2"
              style={{ color: 'var(--text-dim)' }}
            >
              2025 - 2026
            </div>
            <h3 
              className="font-syne text-[17px] font-bold mb-1"
              style={{ color: 'var(--text-primary)' }}
            >
              WE Applied Technology School
            </h3>
            <p 
              className="font-mono text-[13px]"
              style={{ color: 'var(--text-muted)' }}
            >
              IT Department — 2nd Grade
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 
            className="font-syne text-[18px] font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={index} name={skill.name} highlighted={skill.highlighted} />
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-12">
          <h2 
            className="font-syne text-[18px] font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="font-mono text-[12px] px-4 py-2"
                style={{ 
                  background: 'rgba(59,130,246,0.05)',
                  color: 'var(--accent-blue)',
                  border: '1px solid rgba(59,130,246,0.15)'
                }}
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section>
          <h2 
            className="font-syne text-[18px] font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            What I'm Working Toward
          </h2>
          <p 
            className="font-syne text-[16px] leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            My goal is to become a <strong style={{ color: 'var(--accent-green)' }}>full-stack AI engineer</strong> — combining my web development skills with artificial intelligence to build intelligent web applications that solve real problems.
          </p>
        </section>
      </div>
    </div>
  )
}
