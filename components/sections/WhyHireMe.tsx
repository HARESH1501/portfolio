'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Zap, Users, TrendingUp, Brain, Code, Database, Lightbulb } from 'lucide-react'

const WhyHireMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const valuePropositions = [
    {
      icon: Brain,
      title: 'AI/ML Expertise',
      description: 'Deep knowledge in machine learning, computer vision, and NLP with hands-on project experience',
      highlights: ['TensorFlow & OpenCV', 'RAG Systems', 'Computer Vision', 'Voice Processing'],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Database,
      title: 'Data Analytics Proficiency',
      description: 'Strong analytical skills with experience in data preprocessing, EDA, and visualization',
      highlights: ['Python & SQL', 'Power BI', 'Statistical Analysis', 'Data Visualization'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Code,
      title: 'Deep Learning & Neural Networks',
      description: 'Advanced knowledge in deep learning architectures and neural network optimization',
      highlights: ['TensorFlow & Keras', 'CNN & RNN', 'Model Architecture', 'Performance Tuning'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Problem Solving',
      description: 'Creative approach to solving complex problems with cutting-edge technology solutions',
      highlights: ['Gesture Recognition', 'Voice Interfaces', 'Intelligent Systems', 'User Experience'],
      color: 'from-orange-500 to-red-600'
    }
  ]

  const achievements = [
    {
      icon: Target,
      metric: '5+',
      label: 'AI/ML Projects',
      description: 'Successfully completed projects spanning computer vision, NLP, and data analytics'
    },
    {
      icon: TrendingUp,
      metric: '95%',
      label: 'Accuracy Rate',
      description: 'Achieved high accuracy in gesture recognition and predictive modeling projects'
    },
    {
      icon: Users,
      metric: '1000+',
      label: 'Users Impacted',
      description: 'Created applications that have positively impacted over 1000 users'
    },
    {
      icon: Zap,
      metric: '20%',
      label: 'Performance Boost',
      description: 'Improved application performance through optimization and best practices'
    }
  ]

  return (
    <section id="why-hire-me" className="section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Hire Me?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A passionate Machine Learning engineer with proven expertise in developing intelligent AI systems 
              and delivering measurable business impact through data-driven solutions
            </p>
          </div>

          {/* Value Propositions */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {valuePropositions.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-dark-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${prop.color} rounded-xl`}>
                    <prop.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {prop.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${prop.color} rounded-full`}></div>
                      <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8 mb-16"
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Key Achievements
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
                  className="text-center"
                >
                  <div className="p-4 bg-white dark:bg-dark-800 rounded-xl mb-4 inline-block">
                    <achievement.icon className="text-primary-600" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.label}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What I Bring */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              What I Bring to Your Team
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Technical Excellence
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Strong foundation in AI/ML algorithms, data structures, and software engineering principles
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Team Collaboration
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Proven ability to work effectively in Agile teams and communicate complex technical concepts
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Innovation Mindset
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Passionate about exploring new technologies and finding creative solutions to challenging problems
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Make an Impact
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm excited to bring my passion for Machine Learning and AI innovation to your team. 
              Let's discuss how I can contribute to your organization's AI transformation and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get In Touch
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download="Haresh_KN_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyHireMe