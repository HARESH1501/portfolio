'use client'

import { CyberText } from '@/components/ui/CyberText'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Terminal, RefreshCcw } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const subject = encodeURIComponent(`Operational_Request: ${formData.subject}`)
    const body = encodeURIComponent(
      `SENDER: ${formData.name}\n` +
      `UPLINK: ${formData.email}\n` +
      `PROTOCOL: ${formData.subject}\n\n` +
      `TRANSMISSION:\n${formData.message}\n\n` +
      `---\n[SECURE_CHANNEL_ESTABLISHED]`
    )
    
    const mailtoLink = `mailto:knharesh1501@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'knharesh1501@gmail.com',
      link: 'mailto:knharesh1501@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7200301487',
      link: 'tel:+917200301487'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, India',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: '@HARESH1501',
      link: 'https://github.com/HARESH1501'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Haresh K N',
      link: 'https://www.linkedin.com/in/haresh-k-n-46a1ab376'
    },
    {
      icon: MessageSquare,
      label: 'Message',
      value: 'Available',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-transparent relative z-10">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              className="inline-block mb-4 px-4 py-1 rounded-sm border-l-4 border-blue-500 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-[0.3em]"
            >
              Get In Touch
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 font-space tracking-tighter uppercase text-white">
              <CyberText text="Contact Me" />
            </h2>
            <p className="text-lg text-blue-400/60 max-w-2xl mx-auto font-mono uppercase tracking-wider">
              Let's connect and discuss opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-mono font-black text-blue-500 mb-8 uppercase tracking-[0.4em] flex items-center gap-2">
                    <Terminal size={16} /> Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        whileHover={{ x: 10 }}
                        className="glass-panel p-6 rounded-sm border border-blue-500/10 flex items-center space-x-6 group overflow-hidden"
                      >
                        <div className={`p-4 bg-black border border-blue-500/20 rounded-sm group-hover:border-blue-500 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.1)]`}>
                          <info.icon size={28} className="text-blue-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-blue-500/50 uppercase tracking-[0.2em] mb-1">
                            {info.label}
                          </p>
                          <a href={info.link || "#"} className="text-lg font-bold font-space text-white hover:text-blue-400 transition-colors uppercase">
                            {info.value}
                          </a>
                        </div>
                        <div className="absolute inset-0 bg-blue-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Uplinks */}
                <div>
                  <h3 className="text-xs font-mono font-black text-blue-500 mb-8 uppercase tracking-[0.4em] flex items-center gap-2">
                    <RefreshCcw size={16} className="animate-spin-slow" /> Social Links
                  </h3>
                  
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, borderColor: '#3b82f6', color: '#60a5fa' }}
                        className="glass-panel px-6 py-4 rounded-sm border border-blue-500/10 flex items-center gap-4 group transition-all"
                      >
                        <social.icon size={22} />
                        <span className="text-xs font-mono font-bold uppercase tracking-widest">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Priority Status */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  className="bg-blue-500/5 border border-dashed border-blue-500/30 p-8 rounded-sm relative"
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-space font-black text-white mb-2 uppercase tracking-tight">
                        OPERATIONAL_RECRUITMENT::ACTIVE
                      </h4>
                      <p className="text-gray-400 text-xs font-mono leading-relaxed uppercase tracking-tight">
                        System currently optimized for data analytics, machine learning, and AI mission roles. 32-bit encrypted feedback enabled.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="glass-panel p-10 rounded-sm hud-border relative overflow-hidden">
                <div className="flex items-center gap-2 mb-10 pb-4 border-b border-blue-500/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-mono text-blue-500/40 ml-4 tracking-[0.2em] uppercase">terminal --uplink-protocol</span>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative group/field">
                      <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.2em] mb-2 block">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/40 border-b border-blue-500/20 px-0 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-800"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="relative group/field">
                      <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.2em] mb-2 block">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/40 border-b border-blue-500/20 px-0 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-800"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="relative group/field">
                    <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.2em] mb-2 block">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border-b border-blue-500/20 px-0 py-3 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-800"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="relative group/field">
                    <label className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.2em] mb-2 block">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-black/40 border border-blue-500/10 p-4 text-white font-mono text-sm focus:outline-none focus:border-blue-500/40 transition-all placeholder:text-gray-800 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(59, 130, 246, 0.9)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 p-5 font-mono font-black text-white uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(59,130,246,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>PROCESSING...</span>
                      </div>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>INITIATE_UPLINK</span>
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] uppercase tracking-widest text-center"
                      >
                        [SUCCESS]::UPLINK_BYPASS_INITIATED. PLEASE_FINALIZE_IN_CLIENT.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
