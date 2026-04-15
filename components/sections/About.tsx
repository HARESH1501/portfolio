'use client'

import { CyberText } from '@/components/ui/CyberText'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Calendar, Smartphone, Mail, Globe } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-transparent relative z-10">
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
              <CyberText text="About Me" />
            </h2>
            <p className="text-lg text-blue-400/60 max-w-2xl mx-auto font-mono uppercase tracking-wider">
              Get to know me and my background
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="glass-panel p-10 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500/20" />
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed font-medium">
                  I'm a passionate <span className="text-blue-400 font-bold font-space">Computer Science Engineering</span> student 
                  specializing in <span className="text-blue-300">Machine Learning</span>, 
                  <span className="text-blue-300 ml-1">Artificial Intelligence</span>, and 
                  <span className="text-blue-300 ml-1">Data Science</span>.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                  Currently pursuing my B.E. at KPR Institute of Engineering and Technology, I focus on building intelligent 
                  architectures that bridge the gap between abstract data and real-world intelligence.
                </p>
                
                <p className="text-lg text-gray-400 leading-relaxed font-medium">
                  My mission is to architect neural systems that solve complex problems. From RAG-based document AI to 
                  real-time computer vision, I thrive on the challenge of algorithmic optimization and system design.
                </p>

                <div className="pt-6 flex items-center gap-4 text-xs font-mono text-blue-500/60 uppercase tracking-widest">
                  <div className="w-2 h-2 bg-blue-500 animate-ping" />
                  Profile Complete
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Education Card */}
              <div className="glass-panel p-10 rounded-sm hud-border relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-500/20 group-hover:border-blue-500 transition-colors" />
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-black border border-blue-500/30 rounded-full group-hover:border-blue-500 transition-colors">
                    <GraduationCap className="text-blue-400" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white mb-3 font-space uppercase tracking-tight">
                      <CyberText text="Education" delay={600} />
                    </h3>
                    <p className="text-blue-200 font-bold font-space uppercase text-sm mb-1">
                      B.E. CSE (AI & ML)
                    </p>
                    <p className="text-gray-500 font-mono text-xs uppercase mb-4 tracking-tighter">
                      KPR Institute of Engineering and Technology
                    </p>
                    <div className="flex items-center space-x-6 text-[10px] font-mono text-blue-500/60 uppercase tracking-widest">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>2023 - 2027</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={14} />
                        <span>Coimbatore</span>
                      </div>
                    </div>
                    <p className="text-blue-400 font-black font-space mt-4 text-lg">CGPA: 8.20</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="glass-panel p-10 rounded-sm relative group overflow-hidden">
                <h3 className="text-xl font-black text-white mb-8 font-space uppercase tracking-tight">
                  <CyberText text="Contact Information" delay={800} />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-4 group/item">
                    <div className="p-3 bg-black border border-blue-500/10 rounded-sm group-hover/item:border-blue-500 transition-colors">
                      <Mail size={18} className="text-blue-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-gray-500 uppercase">EMAIL</span>
                      <a href="mailto:knharesh1501@gmail.com" className="text-sm font-bold font-space text-white hover:text-blue-400 transition-colors">
                        knharesh1501@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group/item">
                    <div className="p-3 bg-black border border-blue-500/10 rounded-sm group-hover/item:border-blue-500 transition-colors">
                      <Smartphone size={18} className="text-blue-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-gray-500 uppercase">PHONE</span>
                      <a href="tel:+917200301487" className="text-sm font-bold font-space text-white hover:text-blue-400 transition-colors">
                        +91 7200301487
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group/item">
                    <div className="p-3 bg-black border border-blue-500/10 rounded-sm group-hover/item:border-blue-500 transition-colors">
                      <Globe size={18} className="text-blue-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-gray-500 uppercase">LOCATION</span>
                      <span className="text-sm font-bold font-space text-white">Coimbatore, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
