'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react'
// import Image from 'next/image'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/resume.pdf' // You'll need to add the actual resume file
    link.download = 'Haresh_KN_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Haresh K N
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Machine Learning Engineer & AI Specialist
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-500 dark:text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Computer Science Engineering student specializing in Machine Learning, Computer Vision, 
              and AI-driven solutions. Passionate about transforming data into intelligent systems.
            </motion.p>
          </motion.div>

          {/* Right Column - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background Gradient Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 scale-110"></div>
              
              {/* Photo Container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-2xl bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900"
              >
                <img
                  src="/haresh-photo.jpg"
                  alt="Haresh K N - Machine Learning Engineer"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 via-transparent to-transparent"></div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-80"
              ></motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons - Centered below both columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View Projects
            </motion.a>
            
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <motion.a
              href="https://github.com/HARESH1501"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/haresh-k-n-46a1ab376"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            
            <motion.a
              href="mailto:knharesh1501@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-3 bg-gray-100 dark:bg-dark-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero