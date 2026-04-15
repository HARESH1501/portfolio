'use client'

import { CyberText } from '@/components/ui/CyberText'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Users, TrendingUp, Code, Database, Terminal, ShieldCheck } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Built responsive web applications with modern frameworks and optimized performance'
    },
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Improved query performance and implemented efficient data structures'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Worked in Agile teams to deliver high-quality solutions on schedule'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tuning',
      description: 'Enhanced application speed and user experience through optimization'
    }
  ]

  return (
    <section id="experience" className="section-padding bg-transparent relative z-10">
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
              className="inline-block mb-4 px-4 py-1 rounded-sm border-r-4 border-blue-500 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-[0.3em]"
            >
              Professional Experience
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 font-space tracking-tighter uppercase text-white">
              <CyberText text="Work Experience" />
            </h2>
            <p className="text-lg text-blue-400/60 max-w-2xl mx-auto font-mono uppercase tracking-wider">
              My professional journey and career highlights
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="glass-panel rounded-sm p-10 mb-12 relative hud-border shimmer-laser overflow-hidden group"
            >
              {/* HUD Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/10 group-hover:border-blue-500 transition-colors" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-500/30" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                  <div className="flex items-start space-x-6">
                    <div className="p-5 bg-black border border-blue-500/30 rounded-sm group-hover:border-blue-500 transition-colors">
                      <Briefcase className="text-blue-400" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white font-space uppercase tracking-tight mb-2">
                        Full Stack Development Intern
                      </h3>
                      <p className="text-xl text-blue-500 font-mono font-bold uppercase tracking-widest">
                        Novigo Infotech Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:text-right flex flex-col gap-2">
                    <div className="flex items-center md:justify-end space-x-2 text-blue-400/60 font-mono text-[10px] uppercase tracking-[0.2em]">
                      <Calendar size={14} />
                      <span>JAN_2025 - PRESENT</span>
                    </div>
                    <div className="flex items-center md:justify-end space-x-2 text-blue-400/60 font-mono text-[10px] uppercase tracking-[0.2em]">
                      <MapPin size={14} />
                      <span>COIMBATORE, IN</span>
                    </div>
                  </div>
                </div>

                <div className="mb-12 border-l-2 border-blue-500/10 pl-8">
                  <p className="text-gray-400 text-lg leading-relaxed font-medium">
                    Developing responsive web applications and optimizing database performance. 
                    Collaborating in Agile teams to deliver high-quality production systems.
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono font-black text-blue-500 mb-6 uppercase tracking-[0.4em] flex items-center gap-2">
                    <Terminal size={16} /> Key Responsibilities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    {[
                      'Frontend Development: HTML5/CSS3/JavaScript',
                      'Backend Development: Node.js/Optimization',
                      'Database: MySQL Query Tuning & Integration',
                      'UI/UX: Responsive Design Implementation',
                      'Methodology: Agile Development',
                      'Collaboration: Cross-Platform Teamwork'
                    ].map((duty, i) => (
                      <div key={i} className="flex items-center space-x-4 group/item">
                        <div className="w-1.5 h-1.5 bg-blue-500/40 group-hover/item:bg-blue-500 rounded-full transition-colors" />
                        <span className="text-gray-400 text-sm font-mono uppercase tracking-tight group-hover/item:text-blue-300 transition-colors">
                          {duty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <div className="mb-12">
              <h3 className="text-xs font-mono font-black text-blue-500 text-center mb-10 uppercase tracking-[0.5em]">
                Key Achievements
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="glass-panel p-8 rounded-sm border border-blue-500/10 hover:border-blue-500 transition-all group"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="p-4 bg-black border border-blue-500/20 rounded-sm group-hover:border-blue-500 transition-colors">
                        <achievement.icon className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white font-space uppercase tracking-tight mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Synchronization Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="mt-16 bg-blue-500/5 border border-blue-500/20 p-10 rounded-sm relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black border border-blue-500 text-[10px] font-mono text-blue-500 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={14} /> Technologies Used
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MySQL', 
                  'Responsive Design', 'Agile', 'Team Collaboration',
                  'Performance Optimization', 'Database Optimization'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-black border border-blue-500/10 text-blue-400/60 rounded-sm text-xs font-mono uppercase tracking-[0.2em] hover:text-blue-500 hover:border-blue-500 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
