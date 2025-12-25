'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Brain, Database, Wrench, Users, Lightbulb } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'SQL', 'Java'],
      color: 'bg-blue-500'
    },
    {
      title: 'AI/ML Technologies',
      icon: Brain,
      skills: ['Scikit-learn', 'TensorFlow', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Hand Tracking'],
      color: 'bg-purple-500'
    },
    {
      title: 'Data Analytics',
      icon: Database,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Excel', 'Power BI', 'EDA'],
      color: 'bg-green-500'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: ['Streamlit', 'Git', 'GitHub', 'MySQL'],
      color: 'bg-orange-500'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Time Management'],
      color: 'bg-pink-500'
    },
    {
      title: 'Specializations',
      icon: Lightbulb,
      skills: ['RAG Systems', 'Voice Processing', 'Computer Vision', 'Gesture Recognition', 'NLP'],
      color: 'bg-indigo-500'
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-950">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent applications and analyzing complex data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform magnetic glow-effect group"
              >
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`p-3 ${category.color} rounded-lg mr-4`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="text-white" size={24} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors">
                    {category.title}
                  </h3>
                </motion.div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        delay: (index * 0.15) + (skillIndex * 0.08), 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        color: "#60a5fa"
                      }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all duration-300 cursor-default hover:shadow-lg"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Proficiency Bars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Core Competencies
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { skill: 'Python Programming', level: 90 },
                { skill: 'Machine Learning', level: 85 },
                { skill: 'Data Analysis', level: 88 },
                { skill: 'Computer Vision', level: 82 },
                { skill: 'SQL & Databases', level: 80 },
                { skill: 'Problem Solving', level: 92 }
              ].map((item, index) => (
                <motion.div 
                  key={item.skill} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + (index * 0.1), duration: 0.6 }}
                >
                  <div className="flex justify-between">
                    <motion.span 
                      className="text-gray-700 dark:text-gray-300 font-medium"
                      whileHover={{ scale: 1.05, color: "#60a5fa" }}
                    >
                      {item.skill}
                    </motion.span>
                    <motion.span 
                      className="text-primary-600 font-semibold"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.5 + (index * 0.1), duration: 0.5 }}
                    >
                      {item.level}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={inView ? { width: `${item.level}%`, opacity: 1 } : {}}
                      transition={{ 
                        delay: 1.2 + (index * 0.1), 
                        duration: 1.5,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 h-3 rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2, 
                          delay: 2 + (index * 0.1),
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills