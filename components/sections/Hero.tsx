'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Machine Learning Engineer & AI Specialist'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Haresh_KN_Resume.pdf'
    link.click()
  }

  // Particle animation variants
  const particleVariants = {
    animate: {
      y: [0, -100],
      opacity: [0, 1, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950">
      {/* Animated Background with Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 opacity-90"></div>
      
      {/* Floating Particles */}
      <div className="particles absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute w-2 h-2 bg-primary-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`
            }}
            variants={particleVariants}
            animate="animate"
          />
        ))}
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2 
            }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.5, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5 
              }}
            >
              <span className="text-gradient bg-gradient-to-r from-primary-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-glow">
                Haresh K N
              </span>
            </motion.h1>
            
            <motion.div 
              className="text-xl md:text-2xl text-gray-300 mb-4 h-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <span className="typewriter border-r-2 border-primary-400">
                {displayText}
              </span>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Computer Science Engineering student specializing in Machine Learning, Computer Vision, 
              and AI-driven solutions. Passionate about transforming data into intelligent systems.
            </motion.p>
          </motion.div>

          {/* Right Column - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8 
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated Background Circles */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              {/* Photo Container */}
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.6 }
                }}
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl bg-gradient-to-br from-primary-900 to-purple-900 glow-effect"
              >
                <motion.img
                  src="/haresh-photo.jpg"
                  alt="Haresh K N - Machine Learning Engineer"
                  className="w-full h-full object-cover object-center"
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 via-transparent to-transparent"></div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-80 shadow-lg"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, 10, 0],
                  rotate: [0, -360]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6, 
                  delay: 2,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 shadow-lg"
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Action Buttons - Centered below both columns */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary magnetic pulse-glow"
            >
              View Projects
            </motion.a>
            
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ 
                scale: 1.05,
                borderColor: "#3b82f6"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 magnetic"
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Download size={20} />
              </motion.div>
              Download Resume
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#3b82f6"
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 magnetic"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {[
              { href: "https://github.com/HARESH1501", icon: Github, delay: 0 },
              { href: "https://www.linkedin.com/in/haresh-k-n-46a1ab376", icon: Linkedin, delay: 0.1 },
              { href: "mailto:knharesh1501@gmail.com", icon: Mail, delay: 0.2 }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5 + social.delay, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-primary-400 transition-all duration-300 magnetic glow-effect"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer"
            >
              <ChevronDown size={32} className="text-gray-400 hover:text-primary-400 transition-colors" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero