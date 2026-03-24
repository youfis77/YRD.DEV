import { useState } from 'react'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitted(true)
    setErrors({})
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 5000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'youseefgamer164@gmail.com',
      href: 'mailto:youseefgamer164@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+20 101 028 4573',
      href: 'tel:+201010284573'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+20 101 028 4573',
      href: 'https://wa.me/201010284573'
    }
  ]

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

      <div className="relative z-10 px-6 md:px-12 py-20 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <span 
            className="font-mono text-[12px] opacity-50"
            style={{ color: 'var(--accent-green)' }}
          >
            04
          </span>
          <h1 
            className="font-syne text-[clamp(36px,5vw,48px)] font-extrabold mt-4 tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Get In Touch
          </h1>
          <p 
            className="font-syne text-[16px] mt-4 max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 
              className="font-syne text-[18px] font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Send a Message
            </h2>
            
            {isSubmitted ? (
              <div 
                className="border p-6"
                style={{ 
                  background: 'rgba(0,255,170,0.1)',
                  borderColor: 'var(--accent-green)'
                }}
              >
                <p className="font-mono text-[14px]" style={{ color: 'var(--accent-green)' }}>
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label 
                    className="font-mono text-[12px] uppercase tracking-wider block mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-syne text-[15px] transition-colors focus:outline-none"
                    style={{ 
                      background: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${errors.name ? '#ef4444' : 'var(--border-subtle)'}`,
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="font-mono text-[11px] text-red-500 mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label 
                    className="font-mono text-[12px] uppercase tracking-wider block mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-syne text-[15px] transition-colors focus:outline-none"
                    style={{ 
                      background: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${errors.email ? '#ef4444' : 'var(--border-subtle)'}`,
                      color: 'var(--text-primary)'
                    }}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="font-mono text-[11px] text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    className="font-mono text-[12px] uppercase tracking-wider block mb-2"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 font-syne text-[15px] transition-colors focus:outline-none resize-none"
                    style={{ 
                      background: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${errors.message ? '#ef4444' : 'var(--border-subtle)'}`,
                      color: 'var(--text-primary)'
                    }}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="font-mono text-[11px] text-red-500 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full font-mono text-[13px] px-8 py-3.5 border-none font-bold uppercase tracking-widest hover:opacity-85 transition-opacity"
                  style={{ background: 'var(--accent-green)', color: '#080B10' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 
              className="font-syne text-[18px] font-bold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              Contact Info
            </h2>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border transition-colors group"
                  style={{ 
                    background: 'rgba(255,255,255,0.02)',
                    borderColor: 'var(--border-subtle)'
                  }}
                >
                  <div 
                    className="w-10 h-10 flex items-center justify-center border"
                    style={{ 
                      background: 'rgba(0,255,170,0.05)',
                      borderColor: 'var(--accent-green)'
                    }}
                  >
                    <info.icon size={18} style={{ color: 'var(--accent-green)' }} />
                  </div>
                  <div>
                    <p 
                      className="font-mono text-[10px] uppercase tracking-wider"
                      style={{ color: 'var(--text-dim)' }}
                    >
                      {info.label}
                    </p>
                    <p 
                      className="font-syne text-[14px] transition-colors"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div 
              className="border p-4"
              style={{ 
                background: 'rgba(255,255,255,0.02)',
                borderColor: 'var(--border-subtle)'
              }}
            >
              <p 
                className="font-mono text-[10px] uppercase tracking-wider mb-1"
                style={{ color: 'var(--text-dim)' }}
              >
                Location
              </p>
              <p 
                className="font-syne text-[14px]"
                style={{ color: 'var(--text-primary)' }}
              >
                Sheikh Zayed, Egypt
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
