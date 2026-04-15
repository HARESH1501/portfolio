'use client'

import { CyberText } from '@/components/ui/CyberText'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Zap, Users, TrendingUp, Brain, Code, Database, Lightbulb, ShieldAlert, Cpu } from 'lucide-react'

const WhyHireMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const valuePropositions = [
    {
      icon: Brain,
      title: 'AI & ML Expertise',
      description: 'Deep knowledge in neural networks, computer vision, and machine learning algorithms with hands-on project experience.',
      metrics: ['90% Model Accuracy', '5+ ML Projects', 'TensorFlow & PyTorch']
    },
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Proficient in modern web technologies, building responsive applications with clean, maintainable code.',
      metrics: ['React & Next.js', 'Node.js Backend', 'Database Design']
    },
    {
      icon: TrendingUp,
      title: 'Problem Solver',
      description: 'Strong analytical skills with a track record of solving complex technical challenges efficiently.',
      metrics: ['Critical Thinking', 'Algorithm Design', 'Optimization']
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Excellent collaboration skills, experienced in Agile methodologies and cross-functional teamwork.',
      metrics: ['Agile Experience', 'Clear Communication', 'Adaptable']
    }
  ]

  const achievements = [
    { label: 'Projects Completed', value: '30+', icon: Target, description: 'Successfully delivered projects' },
    { label: 'Technologies Mastered', value: '15+', icon: Cpu, description: 'Proficient in multiple tech stacks' },
    { label: 'Code Quality', value: '95%', icon: ShieldAlert, description: 'High quality standards' },
    { label: 'Learning Speed', value: 'Fast', icon: Zap, description: 'Quick adaptation to new technologies' }
  ]

  return (
    <section id="why-hire-me" className="section-padding bg-transparent relative z-10">
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
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
            <h2 className="text-5xl md:text-7xl font-black mb-6 font-space tracking-tighter uppercase text-white">
              <CyberText text="Why Hire Me" />
            </h2>
            <p className="text-lg text-blue-400/60 max-w-3xl mx-auto font-mono uppercase tracking-[0.2em]">
              What I bring to your team
            </p>
          </div>

          {/* Key Strengths */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-10 rounded-sm relative hud-border shimmer-laser overflow-hidden group"
              >
                <div className="flex items-start gap-8 mb-8">
                  <div className="p-5 bg-black border border-blue-500/30 rounded-sm group-hover:border-blue-500 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    <prop.icon className="text-blue-400" size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white mb-3 font-space uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                      {prop.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {prop.metrics.map((highlight) => (
                    <div key={highlight} className="flex items-center space-x-3 group/item">
                      <div className="w-1.5 h-1.5 bg-blue-500/40 group-hover/item:bg-blue-500 rounded-full transition-colors" />
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest group-hover/item:text-blue-300 transition-colors">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Strengths */}
          <div className="glass-panel rounded-sm p-12 relative hud-border mb-20">
            <h3 className="text-xl font-black text-white text-center mb-12 font-space uppercase tracking-tight">
              <CyberText text="Core Strengths" delay={500} />
            </h3>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Brain, title: 'Technical Excellence', desc: 'Optimized algorithms and clean code architecture.' },
                { icon: Users, title: 'Team Collaboration', desc: 'Seamless integration with Agile teams.' },
                { icon: Lightbulb, title: 'Innovation', desc: 'Creative problem-solving for complex scenarios.' }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                    <item.icon className="text-blue-400 group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h4 className="text-xs font-mono font-black text-white mb-4 uppercase tracking-[0.2em]">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-[11px] font-mono uppercase tracking-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-24"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-blue-500/5 border border-blue-500/20 rounded-full mb-8">
              <ShieldAlert className="text-blue-500" size={16} />
              <span className="text-[10px] font-mono text-blue-500/80 uppercase tracking-widest">Available for Opportunities</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 font-space uppercase tracking-tighter">
              Ready to Work
            </h3>
            <p className="text-gray-400 font-mono text-sm mb-12 max-w-2xl mx-auto uppercase tracking-tighter">
              Let's connect and discuss how I can contribute to your team's success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, backgroundColor: '#3b82f6', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-blue-600 font-mono font-black text-white uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                Contact Me
              </motion.a>
              
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05, borderColor: '#3b82f6', color: '#3b82f6' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border border-blue-500/20 font-mono font-black text-gray-400 uppercase tracking-[0.3em] hover:bg-blue-500/5"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyHireMe
