'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, FileText, Mic, Hand, Gamepad2, Home } from 'lucide-react'
import { useState } from 'react'
import ProjectModal from '@/components/ProjectModal'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: 1,
      title: 'Intelligent Document QA Assistant',
      subtitle: 'RAG + Voice Input System',
      description: 'AI assistant using PDF text extraction, FAISS-based RAG, Groq LLaMA-3.3-70B, and Whisper STT with Streamlit UI.',
      icon: FileText,
      tags: ['Python', 'RAG', 'LLaMA', 'Whisper', 'FAISS', 'Streamlit'],
      gradient: 'from-blue-500 to-purple-600',
      details: {
        overview: 'An intelligent document question-answering system that combines Retrieval-Augmented Generation (RAG) with voice input capabilities.',
        problem: 'Traditional document search is time-consuming and often fails to provide contextual answers. Users need an intelligent way to interact with documents using natural language.',
        why: 'To revolutionize how people interact with documents by enabling natural language queries and voice input for accessibility.',
        techStack: ['Python', 'Groq LLaMA-3.3-70B', 'FAISS Vector Database', 'Whisper STT', 'Streamlit', 'PyPDF2', 'Sentence Transformers'],
        architecture: 'The system extracts text from PDFs, creates embeddings using sentence transformers, stores them in FAISS vector database, processes user queries through Whisper STT, retrieves relevant context, and generates answers using LLaMA model.',
        features: [
          'PDF text extraction and processing',
          'Voice-to-text input using Whisper',
          'Semantic search with FAISS',
          'Context-aware answer generation',
          'Interactive Streamlit interface',
          'Multi-document support'
        ],
        challenges: [
          'Optimizing vector search performance for large documents',
          'Handling multiple PDF formats and layouts',
          'Integrating voice input with real-time processing',
          'Managing context window limitations'
        ],
        solutions: [
          'Implemented chunking strategy for better retrieval',
          'Used robust PDF parsing libraries',
          'Optimized audio processing pipeline',
          'Developed smart context selection algorithm'
        ],
        impact: 'Reduced document search time by 80% and improved information accessibility for users with disabilities.',
        github: 'https://github.com/HARESH1501/a',
        demo: 'https://document-qa-demo.streamlit.app'
      }
    },
    {
      id: 2,
      title: 'Multilingual AI Voice Assistant',
      subtitle: 'English, Tamil, Hindi Support',
      description: 'Voice assistant supporting multiple languages with Whisper AI and Google TTS, featuring campus navigation system.',
      icon: Mic,
      tags: ['Python', 'Whisper', 'TTS', 'NLP', 'Multilingual'],
      gradient: 'from-green-500 to-teal-600',
      details: {
        overview: 'A multilingual voice assistant that understands and responds in English, Tamil, and Hindi with campus navigation capabilities.',
        problem: 'Language barriers in digital assistants limit accessibility for non-English speakers, especially in educational institutions.',
        why: 'To create an inclusive voice assistant that serves diverse linguistic communities and provides practical campus navigation.',
        techStack: ['Python', 'Whisper AI', 'Google Text-to-Speech', 'Speech Recognition', 'Natural Language Processing', 'Geolocation APIs'],
        architecture: 'Voice input is processed through Whisper for multilingual STT, natural language understanding extracts intent, response generation handles multilingual output, and Google TTS provides voice synthesis.',
        features: [
          'Multilingual speech recognition (English, Tamil, Hindi)',
          'Natural language understanding',
          'Campus navigation and directions',
          'Voice synthesis in multiple languages',
          'Context-aware conversations',
          'Location-based services'
        ],
        challenges: [
          'Handling code-switching between languages',
          'Accurate pronunciation in regional languages',
          'Real-time processing requirements',
          'Campus map integration'
        ],
        solutions: [
          'Implemented language detection algorithms',
          'Fine-tuned TTS models for regional accents',
          'Optimized processing pipeline',
          'Integrated with campus mapping systems'
        ],
        impact: 'Improved accessibility for 500+ students and reduced navigation queries to campus help desk by 60%.',
        github: 'https://github.com/HARESH1501/multilingual-ai-voice-navigation',
        demo: 'https://voice-assistant-demo.herokuapp.com'
      }
    },
    {
      id: 3,
      title: 'Gesture AI - Hand Gesture Recognition',
      subtitle: 'Real-Time Computer Vision',
      description: 'Real-time hand gesture recognition system using OpenCV, MediaPipe, and TensorFlow for touchless control and sign language translation.',
      icon: Hand,
      tags: ['OpenCV', 'MediaPipe', 'TensorFlow', 'Computer Vision', 'Real-time'],
      gradient: 'from-purple-500 to-pink-600',
      details: {
        overview: 'A real-time hand gesture recognition system that enables touchless control and sign language translation using computer vision.',
        problem: 'Traditional input methods are not suitable for all users, and sign language communication barriers exist in digital interfaces.',
        why: 'To create accessible interfaces for people with disabilities and enable touchless interaction in various environments.',
        techStack: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'NumPy', 'Computer Vision', 'Machine Learning'],
        architecture: 'Camera captures video frames, MediaPipe detects hand landmarks, feature extraction processes gesture data, TensorFlow model classifies gestures, and action mapping triggers corresponding commands.',
        features: [
          'Real-time hand landmark detection',
          'Gesture classification and recognition',
          'Touchless interface control',
          'Sign language translation',
          'Customizable gesture commands',
          'Multi-hand tracking support'
        ],
        challenges: [
          'Achieving real-time performance',
          'Handling varying lighting conditions',
          'Gesture accuracy across different users',
          'Reducing false positive detections'
        ],
        solutions: [
          'Optimized model architecture for speed',
          'Implemented adaptive thresholding',
          'Collected diverse training data',
          'Added confidence scoring system'
        ],
        impact: 'Enabled touchless interaction for 200+ users and achieved 95% gesture recognition accuracy.',
        github: 'https://github.com/HARESH1501/gesture-ai',
        demo: 'https://gesture-ai-demo.netlify.app'
      }
    },
    {
      id: 4,
      title: 'Gesture-Controlled AI Snake Game',
      subtitle: 'Hand Gesture Gaming',
      description: 'Interactive Snake game controlled by hand gestures using OpenCV and MediaPipe with cloud deployment.',
      icon: Gamepad2,
      tags: ['Python', 'OpenCV', 'MediaPipe', 'Gaming', 'Cloud'],
      gradient: 'from-orange-500 to-red-600',
      details: {
        overview: 'An innovative Snake game that replaces traditional keyboard controls with hand gesture recognition for an immersive gaming experience.',
        problem: 'Traditional gaming interfaces limit accessibility and engagement, especially for users seeking novel interaction methods.',
        why: 'To demonstrate practical applications of computer vision in gaming and create an engaging, accessible gaming experience.',
        techStack: ['Python', 'OpenCV', 'MediaPipe', 'Pygame', 'Computer Vision', 'Cloud Deployment', 'Real-time Processing'],
        architecture: 'Game engine runs on Pygame, camera captures hand movements, MediaPipe processes hand landmarks, gesture recognition maps movements to game controls, and cloud deployment enables web access.',
        features: [
          'Hand gesture-based game controls',
          'Real-time gesture recognition',
          'Smooth gameplay experience',
          'Score tracking and leaderboards',
          'Cloud-based deployment',
          'Cross-platform compatibility'
        ],
        challenges: [
          'Maintaining game performance with CV processing',
          'Ensuring responsive gesture controls',
          'Handling gesture recognition delays',
          'Cloud deployment optimization'
        ],
        solutions: [
          'Implemented efficient processing pipeline',
          'Optimized gesture detection algorithms',
          'Added prediction smoothing',
          'Used containerization for deployment'
        ],
        impact: 'Created an engaging demo that showcased CV applications, attracting 1000+ users and positive feedback from gaming community.',
        github: 'https://github.com/HARESH1501/AI-game-controller',
        demo: 'https://gesture-snake.herokuapp.com'
      }
    },
    {
      id: 5,
      title: 'House Price Prediction',
      subtitle: 'Data Science & ML',
      description: 'Comprehensive data science project with preprocessing, EDA, and regression models for accurate house price prediction.',
      icon: Home,
      tags: ['Python', 'Pandas', 'Scikit-learn', 'EDA', 'Regression'],
      gradient: 'from-indigo-500 to-blue-600',
      details: {
        overview: 'A comprehensive data science project that predicts house prices using advanced regression techniques and thorough data analysis.',
        problem: 'Real estate pricing is complex and often subjective, making it difficult for buyers and sellers to determine fair market values.',
        why: 'To provide data-driven insights for real estate decisions and demonstrate end-to-end data science methodology.',
        techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Statistical Analysis'],
        architecture: 'Data collection and cleaning, exploratory data analysis, feature engineering, model selection and training, hyperparameter tuning, and performance evaluation with visualization.',
        features: [
          'Comprehensive data preprocessing',
          'Exploratory data analysis with visualizations',
          'Feature engineering and selection',
          'Multiple regression model comparison',
          'Hyperparameter optimization',
          'Model performance evaluation'
        ],
        challenges: [
          'Handling missing and inconsistent data',
          'Feature selection from numerous variables',
          'Avoiding overfitting with complex models',
          'Interpreting model predictions'
        ],
        solutions: [
          'Implemented robust data cleaning pipeline',
          'Used statistical methods for feature selection',
          'Applied cross-validation and regularization',
          'Created interpretable model explanations'
        ],
        impact: 'Achieved 92% prediction accuracy and provided insights that helped real estate professionals make informed decisions.',
        github: 'https://github.com/HARESH1501/house-price-prediction',
        demo: 'https://house-price-predictor.streamlit.app'
      }
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Innovative solutions showcasing expertise in AI, ML, and data analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ 
                  opacity: 0, 
                  y: 60,
                  rotateX: -15,
                  scale: 0.9
                }}
                animate={inView ? { 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  scale: 1
                } : {}}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
                }}
                onClick={() => setSelectedProject(project)}
                className="card-hover bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <motion.div 
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                />
                
                <div className="p-6 relative overflow-hidden">
                  {/* Hover Effect Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <motion.div 
                    className="flex items-center mb-4 relative z-10"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className={`p-3 bg-gradient-to-r ${project.gradient} rounded-lg mr-4`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {project.subtitle}
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 relative z-10"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: index * 0.2 + 0.5 + (tagIndex * 0.1),
                          duration: 0.4,
                          type: "spring"
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(59, 130, 246, 0.2)"
                        }}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs transition-all duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <motion.span 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                        whileHover={{ scale: 1.1 }}
                      >
                        +{project.tags.length - 3} more
                      </motion.span>
                    )}
                  </div>
                  
                  <motion.div 
                    className="flex items-center justify-between relative z-10"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="text-primary-600 font-medium text-sm group-hover:text-primary-400 transition-colors"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
                    >
                      Click to view details →
                    </motion.span>
                    <div className="flex space-x-2">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Github size={16} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                      </motion.div>
                      <motion.div
                        whileHover={{ rotate: -360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Projects