'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Passionate about leveraging AI and data to create meaningful solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a passionate Computer Science Engineering student specializing in Machine Learning, 
                  Artificial Intelligence, and Data Science. Currently pursuing my B.E. at KPR Institute 
                  of Engineering and Technology with a CGPA of 8.2, focusing on AI/ML applications.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My expertise lies in developing intelligent machine learning models, computer vision systems, 
                  and data-driven solutions. I'm proficient in Python, TensorFlow, OpenCV, and various ML 
                  frameworks, with hands-on experience in deep learning and neural networks.
                </p>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I have practical experience in projects ranging from RAG-based document QA systems to 
                  real-time gesture recognition using computer vision. My goal is to leverage machine learning 
                  to create intelligent solutions that solve real-world problems and drive innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Education Card */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Education
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      B.E. Computer Science and Engineering (AI & ML)
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      KPR Institute of Engineering and Technology
                    </p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>2023 - 2027</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>Coimbatore</span>
                      </div>
                    </div>
                    <p className="text-primary-600 font-semibold mt-2">CGPA: 8.2</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400">Email:</span>
                    <a 
                      href="mailto:knharesh1501@gmail.com"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      knharesh1501@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400">Phone:</span>
                    <a 
                      href="tel:+917200301487"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      +91 7200301487
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400">Location:</span>
                    <span className="text-gray-700 dark:text-gray-300">Coimbatore, India</span>
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