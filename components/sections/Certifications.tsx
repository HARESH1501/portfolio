'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Calendar, ExternalLink, BookOpen, Brain, BarChart3, Zap, Globe } from 'lucide-react'
import { useState } from 'react'
import CertificateModal from '@/components/CertificateModal'

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  const handleViewCertificate = (cert: any) => {
    setSelectedCertificate(cert)
  }

  const certifications = [
    {
      title: 'Introduction to Large Language Models (LLMs)',
      provider: 'NPTEL - IIT Madras',
      date: 'Jul-Oct 2025',
      icon: Brain,
      description: '12-week comprehensive course on LLM fundamentals, architecture, and applications with 55% consolidated score',
      skills: ['Large Language Models', 'Transformers', 'NLP', 'AI Architecture', 'Deep Learning'],
      color: 'from-purple-500 to-indigo-600',
      verified: true,
      score: '55%',
      duration: '12 weeks',
      institution: 'Indian Institute of Technology Madras',
      certificateUrl: '/certificates/llm-certificate.jpg'
    },
    {
      title: 'Industry 4.0 & Industrial Internet of Things',
      provider: 'NPTEL',
      date: 'Jan-Apr 2025',
      icon: Zap,
      description: 'Advanced concepts in Industry 4.0, IoT integration, and smart manufacturing',
      skills: ['IoT', 'Industry 4.0', 'Smart Systems', 'Automation'],
      color: 'from-blue-500 to-cyan-600',
      verified: true,
      certificateUrl: '/certificates/industry-4-certificate.jpg'
    },
    {
      title: 'GenAI Powered Data Analytics',
      provider: 'Tata (Forage)',
      date: '2024',
      icon: BarChart3,
      description: 'Practical application of Generative AI in data analytics and business intelligence',
      skills: ['GenAI', 'Data Analytics', 'Business Intelligence', 'AI Applications'],
      color: 'from-green-500 to-emerald-600',
      verified: true,
      certificateUrl: '/certificates/tata-genai-certificate.jpg'
    },
    {
      title: 'Master Microsoft Power BI',
      provider: 'Alison',
      date: '2024',
      icon: BarChart3,
      description: 'Comprehensive Power BI training covering data visualization and dashboard creation',
      skills: ['Power BI', 'Data Visualization', 'DAX', 'Business Analytics'],
      color: 'from-yellow-500 to-orange-600',
      verified: true,
      certificateUrl: '/certificates/power-bi-certificate.jpg'
    },
    {
      title: 'Digital 101 Journey',
      provider: 'Future Skills',
      date: '2024',
      icon: Globe,
      description: 'Foundation course in digital technologies and future skills development',
      skills: ['Digital Literacy', 'Future Skills', 'Technology Trends', 'Digital Transformation'],
      color: 'from-pink-500 to-rose-600',
      verified: true,
      certificateUrl: '/certificates/digital-101-certificate.jpg'
    }
  ]

  return (
    <section id="certifications" className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Continuous learning and professional development in cutting-edge technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ 
                  opacity: 0, 
                  y: 50,
                  rotateY: -30,
                  scale: 0.8
                }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0,
                  rotateY: 0,
                  scale: 1
                } : {}}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -8,
                  rotateY: 3,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform overflow-hidden group magnetic"
                style={{ perspective: '1000px' }}
              >
                {/* Header with gradient */}
                <motion.div 
                  className={`h-2 bg-gradient-to-r ${cert.color}`}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                />
                
                <div className="p-6 relative overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  {/* Icon and Title */}
                  <motion.div 
                    className="flex items-start justify-between mb-4 relative z-10"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className={`p-3 bg-gradient-to-r ${cert.color} rounded-lg`}
                        whileHover={{ 
                          rotate: [0, -15, 15, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <cert.icon className="text-white" size={24} />
                      </motion.div>
                      {cert.verified && (
                        <motion.div 
                          className="p-1 bg-green-100 dark:bg-green-900 rounded-full"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 360]
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 3,
                            delay: index * 0.5
                          }}
                        >
                          <Award className="text-green-600 dark:text-green-400" size={16} />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Title and Provider */}
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-primary-400 transition-colors relative z-10"
                    whileHover={{ scale: 1.02 }}
                  >
                    {cert.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="flex items-center justify-between mb-3 relative z-10"
                    whileHover={{ y: -1 }}
                  >
                    <span className="text-primary-600 font-semibold">
                      {cert.provider}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{cert.date}</span>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.p 
                    className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed relative z-10"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {cert.description}
                  </motion.p>

                  {/* Score and Duration */}
                  {(cert.score || cert.duration) && (
                    <motion.div 
                      className="mb-4 p-3 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg relative z-10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between text-sm">
                        {cert.score && (
                          <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ x: 2 }}
                          >
                            <span className="text-gray-600 dark:text-gray-400">Score:</span>
                            <motion.span 
                              className="font-semibold text-primary-600"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                            >
                              {cert.score}
                            </motion.span>
                          </motion.div>
                        )}
                        {cert.duration && (
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                            <span className="font-medium text-gray-700 dark:text-gray-300">{cert.duration}</span>
                          </div>
                        )}
                      </div>
                      {cert.institution && (
                        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="font-medium">{cert.institution}</span>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Skills */}
                  <div className="mb-4 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0, rotate: -90 }}
                          animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                          transition={{ 
                            delay: index * 0.15 + 0.5 + (skillIndex * 0.1),
                            duration: 0.4,
                            type: "spring"
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                            color: "#60a5fa"
                          }}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <motion.div 
                    className="flex items-center justify-between relative z-10"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <BookOpen size={12} className="mr-1" />
                      Certified
                    </span>
                    <motion.button 
                      onClick={() => handleViewCertificate(cert)}
                      className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                      whileHover={{ 
                        scale: 1.05,
                        x: 3
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Certificate</span>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
                      >
                        <ExternalLink size={14} />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certification Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Learning Journey
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary-600">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Completion Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-purple-600">4</div>
                <div className="text-gray-600 dark:text-gray-400">Domains Covered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">2024-25</div>
                <div className="text-gray-600 dark:text-gray-400">Active Learning</div>
              </div>
            </div>
          </motion.div>

          {/* Learning Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Focus Areas
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Large Language Models',
                'Transformers Architecture',
                'Industry 4.0',
                'Generative AI',
                'Data Analytics',
                'Power BI',
                'IoT Systems',
                'Digital Transformation',
                'Business Intelligence',
                'NLP & AI Ethics'
              ].map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + (index * 0.05), duration: 0.3 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  )
}

export default Certifications