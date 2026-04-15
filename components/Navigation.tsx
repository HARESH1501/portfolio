'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Cpu, Power } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PROJECTS', href: '#projects', id: 'projects' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                <Cpu className="w-6 h-6 text-white relative z-10" />
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-50 blur-sm group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden lg:block">
              <div className="text-lg font-black text-white tracking-tight leading-none">
                HARESH K N
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-xs font-mono font-bold tracking-[0.2em] transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30" />
                )}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-black/60 border border-cyan-500/30">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
              <div className="w-2 h-2 bg-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
              ONLINE
            </span>
            <Power className="w-3 h-3 text-cyan-400" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen border-b border-cyan-500/30' : 'max-h-0'
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-sm font-mono font-bold tracking-[0.2em] transition-all ${
                activeSection === item.id
                  ? 'text-cyan-400 bg-cyan-500/10 border-l-4 border-cyan-500'
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 border-l-4 border-transparent'
              }`}
            >
              <span className="text-cyan-500 mr-2">&gt;</span>
              {item.name}
            </a>
          ))}
          
          {/* Mobile Status */}
          <div className="pt-4 mt-4 border-t border-cyan-500/20 flex items-center justify-center gap-3 px-4 py-2 bg-cyan-500/5">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
              <div className="w-2 h-2 bg-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-[10px] font-mono text-cyan-400 tracking-widest">
              SYSTEM_ONLINE
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
