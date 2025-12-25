'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, Users, TrendingUp, Code, Database } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: Code,
      title: 'Responsive Web Modules',
      description: 'Built responsive web modules using HTML, CSS, JavaScript, and Node.js',
      color: 'text-blue-500'
    },
    {
      icon: TrendingUp,
      title: '20% Performance Improvement',
      description: 'Improved page load speed by 20% through optimization techniques',
      color: 'text-green-500'
    },
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Optimized MySQL queries resulting in 15% faster data retrieval',
      color: 'text-purple-500'
    },
    {
      icon: Users,
      title: 'Agile Team Collaboration',
      description: 'Worked in 4-member Agile team, delivered 3 production modules',
      color: 'text-orange-500'
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hands-on experience in full-stack development and team collaboration
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white dark:bg-dark-900 rounded-2xl shadow-xl p-8 mb-8 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-4 bg-primary-100 dark:bg-primary-900 rounded-xl">
                      <Briefcase className="text-primary-600" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Full Stack Development Intern
                      </h3>
                      <p className="text-xl text-primary-600 font-semibold">
                        Novigo Infotech Pvt. Ltd.
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-2">
                      <Calendar size={16} />
                      <span className="font-medium">January 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <span>Coimbatore</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    Currently working as a Full Stack Development Intern, focusing on building 
                    responsive web modules and optimizing database performance. Collaborating 
                    with cross-functional teams to deliver high-quality production modules.
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Responsibilities & Technologies
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Frontend development with HTML, CSS, JavaScript
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Backend development using Node.js
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Database optimization and MySQL query tuning
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Responsive web design implementation
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Agile development methodology
                        </span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Cross-functional team collaboration
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Key Achievements
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.6 }}
                    className="bg-white dark:bg-dark-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-100 dark:bg-dark-800 rounded-lg">
                        <achievement.icon className={achievement.color} size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Gained */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                Skills & Technologies Gained
              </h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'HTML5', 'CSS3', 'JavaScript', 'Node.js', 'MySQL', 
                  'Responsive Design', 'Agile Methodology', 'Team Collaboration',
                  'Performance Optimization', 'Database Optimization'
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-full font-medium shadow-sm hover:shadow-md transition-shadow"
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