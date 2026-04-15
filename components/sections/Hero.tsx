'use client'

import { Download, Mail, Github, Linkedin, ChevronDown, Zap, Cpu, Brain } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const fullText = 'Machine Learning Engineer & AI Specialist'
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleDownloadResume = async () => {
    try {
      // Use the API route for reliable downloads
      const link = document.createElement('a')
      link.href = '/api/download/resume'
      link.download = 'HARESH_KN_AIML_KPRIET.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Download failed:', error)
      // Fallback: try direct file access
      window.open('/resume.pdf', '_blank')
    }
  }

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateX = (y / rect.height) * 20
    const rotateY = (x / rect.width) * 20
    imageRef.current.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleImageMouseLeave = () => {
    if (!imageRef.current) return
    imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Scan Line */}
      <div className="scan-line" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black/60 border border-cyan-500/50 backdrop-blur-xl">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00f3ff]" />
              <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase">
                Welcome
              </span>
              <Zap className="w-4 h-4 text-cyan-400" />
            </div>
            
            {/* Main Title with Glitch Effect */}
            <div className="space-y-4">
              <h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter glitch neon-text-cyan"
                data-text="HARESH K N"
              >
                HARESH K N
              </h1>
              
              {/* Animated Subtitle */}
              <div className="flex items-center gap-3 text-xl md:text-2xl font-mono text-purple-400 min-h-[40px]">
                <span className="text-cyan-400">&gt;</span>
                <span className="neon-text-purple">{displayText}</span>
                <span className="w-3 h-6 bg-purple-500 animate-pulse" />
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl font-light">
              <span className="text-cyan-400 font-mono">Machine Learning Engineer</span> designing next-generation AI systems 
              with deep learning, computer vision, and autonomous intelligence. 
              <span className="text-purple-400"> Transforming data into decisions.</span>
            </p>

            {/* Stats Display */}
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {[
                { icon: Brain, label: 'AI Models', value: '50+' },
                { icon: Cpu, label: 'Projects', value: '30+' },
                { icon: Zap, label: 'Accuracy', value: '95%' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="hologram-card p-4 text-center holo-shimmer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                  <div className="text-2xl font-bold neon-text-cyan">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-mono uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="btn-ai-primary group flex items-center justify-center gap-3"
              >
                <span>EXPLORE PROJECTS</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </a>
              
              <button
                onClick={handleDownloadResume}
                className="btn-ai-secondary flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 pt-8">
              {[
                { href: "https://github.com/HARESH1501", icon: Github, label: "GITHUB" },
                { href: "https://www.linkedin.com/in/haresh-k-n-46a1ab376", icon: Linkedin, label: "LINKEDIN" },
                { href: "mailto:knharesh1501@gmail.com", icon: Mail, label: "EMAIL" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="hologram-card p-4 magnetic hover:scale-110 transition-all duration-300">
                    <social.icon className="w-6 h-6 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - 3D Photo with HUD */}
          <div className="flex justify-center lg:justify-end">
            <div 
              ref={imageRef}
              className="relative group cursor-pointer"
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              style={{ 
                transition: 'transform 0.1s ease-out',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* HUD Frame */}
              <div className="absolute -inset-8 border border-cyan-500/30 pointer-events-none">
                <div className="hud-corner hud-corner-tl" />
                <div className="hud-corner hud-corner-tr" />
                <div className="hud-corner hud-corner-bl" />
                <div className="hud-corner hud-corner-br" />
              </div>

              {/* Energy Pulse Border */}
              <div className="absolute -inset-4 energy-pulse opacity-50" />
              
              {/* Photo Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] hexagon overflow-hidden">
                <div className="absolute inset-0 hologram-card">
                  <img
                    src="/haresh-photo.jpg"
                    alt="Haresh K N - AI Specialist"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 mix-blend-overlay" />
                  
                  {/* Scan Lines */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,243,255,0.03)_2px,rgba(0,243,255,0.03)_4px)] pointer-events-none" />
                  
                  {/* Data Stream */}
                  <div className="absolute inset-0 data-stream opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Status Indicators */}
              <div className="absolute -bottom-8 -left-8 bg-black border border-cyan-500 px-4 py-2 font-mono text-xs flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-cyan-400 animate-pulse" />
                  <div className="w-2 h-2 bg-purple-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-pink-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-cyan-400">NEURAL_SCAN_ACTIVE</span>
              </div>

              <div className="absolute -top-8 -right-8 bg-black border border-purple-500 px-4 py-2 font-mono text-xs text-purple-400">
                ID: ML_ENGINEER_001
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-cyan-400 font-mono text-xs tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
