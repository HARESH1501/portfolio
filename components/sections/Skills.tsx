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
      skills: ['Streamlit', 'Git', 'GitHub', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Node.js'],
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
    <section id="skills" className="section-padding">
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
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${category.color} rounded-lg mr-4`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
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
                <div key={item.skill} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {item.skill}
                    </span>
                    <span className="text-primary-600 font-semibold">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : {}}
                      transition={{ delay: 1 + (index * 0.1), duration: 1 }}
                      className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills