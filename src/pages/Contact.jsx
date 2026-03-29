import { useState, useRef } from 'react'
import { Mail, Phone, MessageCircle, Send, Loader2, CheckCircle, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsLoading(true)

    // Debug: Check if env vars are loaded
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID  
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    alert(`DEBUG:\nService: ${serviceId || 'NOT FOUND'}\nTemplate: ${templateId || 'NOT FOUND'}\nPublic Key: ${publicKey ? 'FOUND' : 'NOT FOUND'}`)

    setSubmitStatus(null)
    setErrors({})

    // Prepare email parameters
    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      message: formData.message.trim(),
      subject: `Portfolio Contact Form - ${formData.name.trim()}`
    }

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      console.log('EmailJS Config Check:', {
        serviceId: serviceId || 'NOT_SET',
        templateId: templateId || 'NOT_SET',
        publicKey: publicKey ? 'SET' : 'NOT_SET'
      })

      const isConfigured = serviceId && templateId && publicKey && 
          serviceId !== 'your_service_id' && 
          templateId !== 'your_template_id' && 
          publicKey !== 'your_public_key'

      if (!isConfigured) {
        alert('Error: EmailJS not configured! Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY to Vercel environment variables.')
        setSubmitStatus('error')
        setErrors({ 
          submit: 'Email service not configured. Please contact directly.' 
        })
        setIsLoading(false)
        return
      }

      alert('Attempting to send email...')
      try {
        await emailjs.send(serviceId, templateId, templateParams, publicKey)
        console.log('Email sent successfully!')
      } catch (emailError) {
        alert(`EmailJS Error: ${emailError.message}`)
        throw emailError
      }

      setSubmitStatus('success')
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus(null)
        setIsSubmitted(false)
      }, 8000)
      
    } catch (error) {
      console.error('EmailJS Error Details:', {
        name: error.name,
        message: error.message,
        status: error.status,
        text: error.text
      })
      
      setSubmitStatus('error')
      
      let errorMessage = 'Failed to send message. Please try again or contact directly.'
      
      if (error.status === 400 || error.text?.includes('Template not found')) {
        errorMessage = 'Email template not found. Please contact directly.'
      } else if (error.status === 401 || error.text?.includes('Unauthorized')) {
        errorMessage = 'Email service authentication failed. Please contact directly.'
      } else if (error.status === -1 || error.message?.includes('Network')) {
        errorMessage = 'Network error. Please check your connection or contact directly.'
      } else if (error.message) {
        errorMessage = error.message
      }
      
      setErrors({ submit: errorMessage })
    } finally {
      setIsLoading(false)
    }
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
            
            {isSubmitted && submitStatus === 'success' ? (
              <div 
                className="border p-6 animate-fadeIn"
                style={{ 
                  background: 'rgba(0,255,170,0.08)',
                  borderColor: 'var(--accent-green)'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle 
                    size={24} 
                    style={{ color: 'var(--accent-green)' }} 
                  />
                  <p 
                    className="font-syne text-[18px] font-bold"
                    style={{ color: 'var(--accent-green)' }}
                  >
                    Message Sent Successfully!
                  </p>
                </div>
                <p className="font-mono text-[13px]" style={{ color: 'var(--text-secondary)' }}>
                  Thank you for reaching out! I've received your message and will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false)
                    setSubmitStatus(null)
                  }}
                  className="mt-4 font-mono text-[12px] uppercase tracking-wider hover:underline"
                  style={{ color: 'var(--accent-green)' }}
                >
                  Send another message →
                </button>
              </div>
            ) : submitStatus === 'error' ? (
              <div 
                className="border p-6 animate-fadeIn"
                style={{ 
                  background: 'rgba(239,68,68,0.08)',
                  borderColor: '#ef4444'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <XCircle 
                    size={24} 
                    style={{ color: '#ef4444' }} 
                  />
                  <p 
                    className="font-syne text-[18px] font-bold"
                    style={{ color: '#ef4444' }}
                  >
                    Failed to Send Message
                  </p>
                </div>
                <p className="font-mono text-[13px] mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {errors.submit || 'Something went wrong. Please try again or contact directly via email.'}
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus(null)
                    setErrors({})
                  }}
                  className="font-mono text-[12px] uppercase tracking-wider hover:underline"
                  style={{ color: '#ef4444' }}
                >
                  Try again →
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                    disabled={isLoading}
                    className="w-full px-4 py-3 font-syne text-[15px] transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={isLoading}
                    className="w-full px-4 py-3 font-syne text-[15px] transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                    disabled={isLoading}
                    rows={5}
                    className="w-full px-4 py-3 font-syne text-[15px] transition-colors focus:outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isLoading}
                  className="w-full font-mono text-[13px] px-8 py-3.5 border-none font-bold uppercase tracking-widest hover:opacity-85 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ 
                    background: isLoading ? 'var(--text-muted)' : 'var(--accent-green)', 
                    color: '#080B10' 
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
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
