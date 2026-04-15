'use client'

import { useEffect, useState } from 'react'
import { Code, Brain, Database, Wrench, Users, Lightbulb, Cpu, Zap } from 'lucide-react'

const Skills = () => {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skills')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'Neural Networks', 'Deep Learning'],
      color: 'cyan'
    },
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'SQL', 'R', 'C++', 'Java'],
      color: 'purple'
    },
    {
      title: 'Computer Vision',
      icon: Cpu,
      skills: ['OpenCV', 'YOLO', 'Image Processing', 'Object Detection', 'Face Recognition'],
      color: 'pink'
    },
    {
      title: 'Data Engineering',
      icon: Database,
      skills: ['Pandas', 'NumPy', 'SQL', 'MongoDB', 'Data Preprocessing', 'ETL'],
      color: 'cyan'
    },
    {
      title: 'Tools & Frameworks',
      icon: Wrench,
      skills: ['Git', 'Docker', 'Jupyter', 'VS Code', 'Linux', 'AWS'],
      color: 'purple'
    },
    {
      title: 'Soft Skills',
      icon: Lightbulb,
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Critical Thinking'],
      color: 'pink'
    }
  ]

  const proficiencyData = [
    { skill: 'Python Programming', level: 90, color: 'cyan' },
    { skill: 'Machine Learning', level: 85, color: 'purple' },
    { skill: 'Data Analysis', level: 88, color: 'cyan' },
    { skill: 'Computer Vision', level: 82, color: 'pink' },
    { skill: 'Database Management', level: 80, color: 'purple' },
    { skill: 'Problem Solving', level: 92, color: 'cyan' }
  ]

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-black/60 border border-cyan-500/50 backdrop-blur-xl mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase">
              My Skills
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
            <span className="neon-text-cyan glitch" data-text="TECHNICAL SKILLS">
              TECHNICAL SKILLS
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            <span className="text-cyan-400">Technologies & Expertise</span> in AI, Machine Learning, and Software Development
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="hologram-card p-6 holo-shimmer group relative"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              {/* HUD Corners */}
              <div className="hud-corner hud-corner-tl" />
              <div className="hud-corner hud-corner-br" />
              
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-black border-2 ${
                  category.color === 'cyan' ? 'border-cyan-500' :
                  category.color === 'purple' ? 'border-purple-500' :
                  'border-pink-500'
                } group-hover:shadow-[0_0_20px] ${
                  category.color === 'cyan' ? 'group-hover:shadow-cyan-500/50' :
                  category.color === 'purple' ? 'group-hover:shadow-purple-500/50' :
                  'group-hover:shadow-pink-500/50'
                } transition-all duration-300`}>
                  <category.icon className={`w-6 h-6 ${
                    category.color === 'cyan' ? 'text-cyan-400' :
                    category.color === 'purple' ? 'text-purple-400' :
                    'text-pink-400'
                  }`} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white font-mono">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 bg-black/60 border ${
                      category.color === 'cyan' ? 'border-cyan-500/30 text-cyan-300 hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(0,243,255,0.3)]' :
                      category.color === 'purple' ? 'border-purple-500/30 text-purple-300 hover:border-purple-500 hover:shadow-[0_0_10px_rgba(191,0,255,0.3)]' :
                      'border-pink-500/30 text-pink-300 hover:border-pink-500 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]'
                    } text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer`}
                    style={{
                      opacity: inView ? 1 : 0,
                      transform: inView ? 'scale(1)' : 'scale(0.8)',
                      transition: `all 0.3s ease ${(index * 0.1) + (skillIndex * 0.05)}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Glitch Overlay */}
              <div className="glitch-overlay" />
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="hologram-card p-10 relative overflow-hidden">
          {/* Top Border Animation */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
            {proficiencyData.map((item, index) => (
              <div key={item.skill} className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className={`font-mono text-xs uppercase tracking-[0.2em] ${
                    item.color === 'cyan' ? 'text-cyan-400' :
                    item.color === 'purple' ? 'text-purple-400' :
                    'text-pink-400'
                  }`}>
                    {item.skill}
                  </span>
                  <span className={`font-mono text-sm font-bold ${
                    item.color === 'cyan' ? 'neon-text-cyan' :
                    item.color === 'purple' ? 'neon-text-purple' :
                    'neon-text-pink'
                  }`}>
                    {item.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className={`w-full h-3 bg-black border ${
                  item.color === 'cyan' ? 'border-cyan-500/30' :
                  item.color === 'purple' ? 'border-purple-500/30' :
                  'border-pink-500/30'
                } overflow-hidden relative`}>
                  <div
                    className={`h-full relative ${
                      item.color === 'cyan' ? 'bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-300' :
                      item.color === 'purple' ? 'bg-gradient-to-r from-purple-600 via-purple-400 to-purple-300' :
                      'bg-gradient-to-r from-pink-600 via-pink-400 to-pink-300'
                    }`}
                    style={{
                      width: inView ? `${item.level}%` : '0%',
                      transition: `width 1.5s ease ${1 + (index * 0.1)}s`
                    }}
                  >
                    {/* Shimmer Effect */}
                    <div 
                      className="absolute inset-0 bg-white/40 blur-sm w-12"
                      style={{
                        animation: 'shimmer-move 2s linear infinite'
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </section>
  )
}

export default Skills
