'use client'

import { CyberText } from '@/components/ui/CyberText'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Calendar, ExternalLink, BookOpen, Brain, BarChart3, Zap, Globe, ShieldCheck, Activity } from 'lucide-react'
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
      description: 'Comprehensive 12-week course covering LLM fundamentals, transformer architectures, and advanced natural language processing techniques from Indian Institute of Technology Madras.',
      icon: Brain,
      verified: true,
      score: '55%',
      duration: '12 weeks',
      institution: 'Indian Institute of Technology Madras',
      skills: ['Large Language Models', 'Transformers Architecture', 'Natural Language Processing', 'AI Architecture', 'Deep Learning'],
      image: '/certificates/llm-certificate.jpg',
      certificateUrl: '/certificates/llm-certificate.jpg',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      title: 'Generative AI',
      provider: 'Tata Consultancy Services',
      date: '2024',
      description: 'Comprehensive study of generative AI models, GANs, diffusion models, and AI content generation systems with hands-on implementation.',
      icon: Zap,
      verified: true,
      score: '92%',
      duration: '6 weeks',
      institution: 'TCS iON',
      skills: ['Generative AI', 'GANs', 'Diffusion Models', 'Deep Learning', 'AI Ethics'],
      image: '/certificates/tata-genai-certificate.jpg',
      certificateUrl: '/certificates/tata-genai-certificate.jpg',
      color: 'from-pink-600 to-purple-600'
    },
    {
      title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
      provider: 'NPTEL - IIT Kharagpur',
      date: '2024',
      description: 'In-depth course on Industry 4.0 concepts, IoT integration, smart manufacturing, cyber-physical systems, and industrial automation.',
      icon: Globe,
      verified: true,
      score: '88%',
      duration: '12 weeks',
      institution: 'Indian Institute of Technology Kharagpur',
      skills: ['Industry 4.0', 'Industrial IoT', 'Smart Manufacturing', 'Cyber-Physical Systems', 'Automation'],
      image: '/certificates/industry-4-certificate.jpg',
      certificateUrl: '/certificates/industry-4-certificate.jpg',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Microsoft Power BI Data Analyst',
      provider: 'Microsoft',
      date: '2024',
      description: 'Professional certification in Power BI covering data visualization, business intelligence, DAX formulas, and advanced analytics dashboard creation.',
      icon: BarChart3,
      verified: true,
      score: '90%',
      duration: '4 weeks',
      institution: 'Microsoft',
      skills: ['Power BI', 'Data Visualization', 'Business Intelligence', 'DAX', 'Analytics'],
      image: '/certificates/power-bi-certificate.jpg',
      certificateUrl: '/certificates/power-bi-certificate.jpg',
      color: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Digital 101',
      provider: 'TCS iON',
      date: '2024',
      description: 'Foundational course covering digital transformation, cloud computing, modern technology frameworks, and digital business strategies.',
      icon: BookOpen,
      verified: true,
      score: '94%',
      duration: '6 weeks',
      institution: 'Tata Consultancy Services',
      skills: ['Digital Transformation', 'Cloud Computing', 'Technology Frameworks', 'Digital Strategy'],
      image: '/certificates/digital-101-certificate.jpg',
      certificateUrl: '/certificates/digital-101-certificate.jpg',
      color: 'from-green-600 to-teal-600'
    }
  ]

  return (
    <section id="certifications" className="section-padding bg-transparent relative z-10">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-20 relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-blue-500/50"
            />
            <h2 className="text-5xl md:text-7xl font-black mb-6 font-space tracking-tighter uppercase text-white">
              <CyberText text="Certifications" />
            </h2>
            <p className="text-lg text-blue-400/60 max-w-2xl mx-auto font-mono uppercase tracking-wider">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-sm relative hud-border shimmer-laser overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-blue-500/20 group-hover:border-blue-500 transition-colors" />
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-black border border-blue-500/30 rounded-full group-hover:border-blue-500 transition-colors">
                      <cert.icon className="text-blue-400" size={24} />
                    </div>
                    {cert.verified && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
                        <ShieldCheck className="text-blue-500" size={14} />
                        <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest">Signed</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-black text-white mb-3 font-space uppercase tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-blue-500/80 uppercase tracking-widest">
                      {cert.provider}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase">
                      <Calendar size={12} />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-8 leading-relaxed font-medium">
                    {cert.description}
                  </p>

                  {(cert.score || cert.duration) && (
                    <div className="mb-8 p-4 bg-blue-500/5 border border-blue-500/10 rounded-sm">
                      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em]">
                        {cert.score && (
                          <div className="flex items-center gap-2 text-blue-400">
                            <Activity size={12} />
                            <span>Score: {cert.score}</span>
                          </div>
                        )}
                        {cert.duration && (
                          <div className="text-gray-500">Duration: {cert.duration}</div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {cert.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-black border border-blue-500/10 text-[9px] font-mono text-blue-400/60 uppercase tracking-tighter hover:border-blue-500 hover:text-blue-400 transition-all">
                        #{skill.replace(/\s+/g, '_')}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleViewCertificate(cert)}
                    className="w-full py-4 border border-blue-500/20 text-xs font-mono font-black text-blue-500 uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-3 group/btn shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Focus Areas */}
          <div className="mt-32">
            <h3 className="text-xs font-mono font-black text-blue-500 text-center mb-12 uppercase tracking-[0.6em]">
              Areas of Expertise
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                'Large Language Models', 'Transformers', 'Industry 4.0 IoT',
                'Generative AI', 'Data Analytics', 'Power BI',
                'Cyber-Physical Systems', 'Deep Learning', 'Business Intelligence'
              ].map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-2 bg-blue-500/5 border border-blue-500/20 text-blue-400 rounded-sm text-xs font-mono font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-crosshair shadow-[0_0_15px_rgba(59,130,246,0.05)]"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

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
