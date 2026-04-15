'use client'

import { ExternalLink, Github, FileText, Mic, Hand, Gamepad2, Home, Shield, BarChart, Cpu, Terminal, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import ProjectModal from '@/components/ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
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

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: 'AI Voice Assistant',
      subtitle: 'Voice Recognition System',
      description: 'Advanced voice-controlled AI assistant with natural language processing, real-time speech recognition, and intelligent task automation.',
      tags: ['Python', 'NLP', 'Speech Recognition', 'AI'],
      icon: Mic,
      github: 'https://github.com/HARESH1501',
      demo: 'https://github.com/HARESH1501?tab=repositories',
      color: 'cyan',
      gradient: 'from-cyan-600 to-blue-600',
      details: {
        overview: 'An advanced AI-powered voice assistant that uses natural language processing and speech recognition to automate tasks and provide intelligent responses.',
        problem: 'Traditional voice assistants lack contextual understanding and personalization.',
        why: 'To create a more intelligent and context-aware voice assistant that can truly understand user intent.',
        techStack: ['Python', 'TensorFlow', 'Speech Recognition', 'NLP', 'PyTorch'],
        architecture: 'The system uses a microservices architecture with separate modules for speech recognition, NLP processing, and task execution.',
        features: [
          'Real-time speech recognition',
          'Natural language understanding',
          'Context-aware responses',
          'Task automation',
          'Multi-language support',
          'Voice customization'
        ],
        challenges: [
          'Handling different accents and speech patterns',
          'Real-time processing requirements',
          'Context retention across conversations'
        ],
        solutions: [
          'Implemented adaptive learning algorithms',
          'Optimized processing pipeline',
          'Built conversation memory system'
        ],
        impact: 'Successfully deployed with 95% accuracy in speech recognition and positive user feedback on natural interactions.',
        github: 'https://github.com/HARESH1501',
        demo: '#'
      }
    },
    {
      id: 2,
      title: 'Gesture Recognition',
      subtitle: 'Computer Vision System',
      description: 'Real-time hand gesture recognition system using computer vision and deep learning for intuitive human-computer interaction.',
      tags: ['OpenCV', 'TensorFlow', 'Computer Vision', 'ML'],
      icon: Hand,
      github: 'https://github.com/HARESH1501',
      demo: 'https://github.com/HARESH1501?tab=repositories',
      color: 'purple',
      gradient: 'from-purple-600 to-pink-600',
      details: {
        overview: 'A real-time gesture recognition system that enables touchless interaction with computers using hand gestures.',
        problem: 'Traditional input methods are not suitable for all scenarios, especially in sterile or hands-free environments.',
        why: 'To enable more natural and intuitive human-computer interaction through gesture recognition.',
        techStack: ['OpenCV', 'TensorFlow', 'Python', 'MediaPipe', 'NumPy'],
        architecture: 'Uses a CNN-based model for gesture classification with real-time video processing pipeline.',
        features: [
          'Real-time hand tracking',
          'Multiple gesture recognition',
          'High accuracy detection',
          'Low latency processing',
          'Customizable gestures',
          'Multi-hand support'
        ],
        challenges: [
          'Varying lighting conditions',
          'Background noise in images',
          'Real-time performance requirements'
        ],
        solutions: [
          'Implemented adaptive thresholding',
          'Used background subtraction techniques',
          'Optimized model for edge deployment'
        ],
        impact: 'Achieved 92% accuracy with sub-100ms latency, enabling smooth real-time interaction.',
        github: 'https://github.com/HARESH1501',
        demo: 'https://github.com/HARESH1501?tab=repositories'
      }
    },
    {
      id: 3,
      title: 'Game AI Engine',
      subtitle: 'Reinforcement Learning AI',
      description: 'Intelligent game AI with reinforcement learning, pathfinding algorithms, and adaptive difficulty scaling.',
      tags: ['Python', 'Reinforcement Learning', 'Game AI'],
      icon: Gamepad2,
      github: 'https://github.com/HARESH1501',
      demo: 'https://github.com/HARESH1501?tab=repositories',
      color: 'pink',
      gradient: 'from-pink-600 to-red-600',
      details: {
        overview: 'An advanced game AI engine that learns and adapts to player behavior using reinforcement learning.',
        problem: 'Traditional game AI is predictable and doesn\'t adapt to player skill levels.',
        why: 'To create more engaging gaming experiences with AI that learns and evolves.',
        techStack: ['Python', 'PyTorch', 'OpenAI Gym', 'Unity ML-Agents'],
        architecture: 'Implements Deep Q-Learning with experience replay and target networks.',
        features: ['Adaptive difficulty', 'Behavior learning', 'Pathfinding', 'Decision making', 'Strategy adaptation', 'Performance optimization'],
        challenges: ['Training stability', 'Reward function design', 'Real-time performance'],
        solutions: ['Implemented curriculum learning', 'Used reward shaping', 'Optimized inference pipeline'],
        impact: 'Created AI agents that provide challenging yet fair gameplay, improving player retention by 40%.',
        github: 'https://github.com/HARESH1501',
        demo: 'https://github.com/HARESH1501?tab=repositories'
      }
    },
    {
      id: 4,
      title: 'Smart Home System',
      subtitle: 'IoT Automation Platform',
      description: 'IoT-based smart home automation with ML-powered energy optimization and predictive maintenance.',
      tags: ['IoT', 'Machine Learning', 'Python', 'Automation'],
      icon: Home,
      github: 'https://github.com/HARESH1501',
      demo: 'https://github.com/HARESH1501?tab=repositories',
      color: 'cyan',
      gradient: 'from-cyan-600 to-teal-600',
      details: {
        overview: 'A comprehensive smart home system that uses ML to optimize energy usage and predict maintenance needs.',
        problem: 'Traditional home automation lacks intelligence and energy efficiency.',
        why: 'To create smarter homes that save energy and predict issues before they occur.',
        techStack: ['Python', 'MQTT', 'TensorFlow', 'Raspberry Pi', 'Node.js'],
        architecture: 'Microservices architecture with edge computing for real-time control.',
        features: ['Energy optimization', 'Predictive maintenance', 'Voice control', 'Mobile app', 'Automation rules', 'Analytics dashboard'],
        challenges: ['Device compatibility', 'Network reliability', 'Data privacy'],
        solutions: ['Implemented standard protocols', 'Built offline mode', 'Used local processing'],
        impact: 'Reduced energy consumption by 30% and prevented 95% of potential equipment failures.',
        github: 'https://github.com/HARESH1501',
        demo: 'https://github.com/HARESH1501?tab=repositories'
      }
    },
    {
      id: 5,
      title: 'Fraud Detection AI',
      subtitle: 'Real-time Security System',
      description: 'Real-time fraud detection system using anomaly detection algorithms and neural networks for financial security.',
      tags: ['Machine Learning', 'Anomaly Detection', 'Security'],
      icon: Shield,
      github: 'https://github.com/HARESH1501',
      demo: 'https://github.com/HARESH1501?tab=repositories',
      color: 'purple',
      gradient: 'from-purple-600 to-indigo-600',
      details: {
        overview: 'An AI-powered fraud detection system that identifies suspicious transactions in real-time.',
        problem: 'Traditional rule-based systems miss sophisticated fraud patterns.',
        why: 'To protect financial systems with advanced AI that detects evolving fraud techniques.',
        techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'Apache Kafka', 'PostgreSQL'],
        architecture: 'Real-time streaming architecture with ensemble ML models.',
        features: ['Real-time detection', 'Anomaly scoring', 'Pattern recognition', 'Alert system', 'Dashboard', 'Model retraining'],
        challenges: ['Imbalanced datasets', 'False positive rate', 'Real-time processing'],
        solutions: ['Used SMOTE for balancing', 'Tuned decision thresholds', 'Optimized pipeline'],
        impact: 'Detected 98% of fraud cases with only 2% false positive rate, saving millions in losses.',
        github: 'https://github.com/HARESH1501',
        demo: 'https://github.com/HARESH1501?tab=repositories'
      }
    },
    {
      id: 6,
      title: 'Predictive Analytics',
      subtitle: 'Business Intelligence Platform',
      description: 'Advanced predictive analytics platform with time series forecasting and business intelligence dashboards.',
      tags: ['Data Science', 'Forecasting', 'Analytics', 'Python'],
      icon: BarChart,
      github: 'https://github.com/HARESH1501',
      demo: 'https://github.com/HARESH1501?tab=repositories',
      color: 'pink',
      gradient: 'from-pink-600 to-orange-600',
      details: {
        overview: 'A comprehensive analytics platform that predicts business trends and provides actionable insights.',
        problem: 'Businesses struggle to make data-driven decisions without predictive insights.',
        why: 'To empower businesses with accurate forecasts and intelligent recommendations.',
        techStack: ['Python', 'Prophet', 'Pandas', 'Plotly', 'FastAPI', 'React'],
        architecture: 'Full-stack application with ML backend and interactive frontend.',
        features: ['Time series forecasting', 'Trend analysis', 'Interactive dashboards', 'Custom reports', 'API access', 'Automated insights'],
        challenges: ['Data quality issues', 'Model selection', 'Scalability'],
        solutions: ['Built data cleaning pipeline', 'Implemented ensemble methods', 'Used cloud infrastructure'],
        impact: 'Improved forecast accuracy by 35% and enabled data-driven decision making across the organization.',
        github: 'https://github.com/HARESH1501',
        demo: 'https://github.com/HARESH1501?tab=repositories'
      }
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-black/60 border border-purple-500/50 backdrop-blur-xl mb-6">
            <Terminal className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-purple-400 font-mono text-sm tracking-[0.3em] uppercase">
              My Work
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
            <span className="neon-text-purple glitch" data-text="PROJECTS">
              PROJECTS
            </span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            <span className="text-purple-400">Featured Projects</span> showcasing my work in 
            <span className="text-cyan-400"> AI and Machine Learning</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="hologram-card group relative overflow-hidden cursor-pointer card-3d"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              {/* HUD Corners */}
              <div className="hud-corner hud-corner-tl" />
              <div className="hud-corner hud-corner-br" />

              {/* Energy Pulse on Hover */}
              {hoveredId === project.id && (
                <div className="absolute inset-0 energy-pulse opacity-30 pointer-events-none" />
              )}

              <div className="p-6 relative z-10">
                {/* Project Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 bg-black border-2 ${
                    project.color === 'cyan' ? 'border-cyan-500' :
                    project.color === 'purple' ? 'border-purple-500' :
                    'border-pink-500'
                  } relative overflow-hidden group-hover:shadow-[0_0_30px] ${
                    project.color === 'cyan' ? 'group-hover:shadow-cyan-500/50' :
                    project.color === 'purple' ? 'group-hover:shadow-purple-500/50' :
                    'group-hover:shadow-pink-500/50'
                  } transition-all duration-300`}>
                    <project.icon className={`w-7 h-7 relative z-10 ${
                      project.color === 'cyan' ? 'text-cyan-400' :
                      project.color === 'purple' ? 'text-purple-400' :
                      'text-pink-400'
                    }`} />
                    {hoveredId === project.id && (
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-pulse" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold uppercase tracking-tight font-mono transition-colors ${
                      hoveredId === project.id 
                        ? project.color === 'cyan' ? 'text-cyan-400' :
                          project.color === 'purple' ? 'text-purple-400' :
                          'text-pink-400'
                        : 'text-white'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-[10px] font-mono uppercase tracking-widest ${
                      project.color === 'cyan' ? 'text-cyan-500/50' :
                      project.color === 'purple' ? 'text-purple-500/50' :
                      'text-pink-500/50'
                    }`}>
                      {project.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 bg-black/60 border text-xs uppercase font-mono tracking-wider transition-all duration-300 ${
                        project.color === 'cyan' ? 'border-cyan-500/30 text-cyan-300 hover:border-cyan-500 hover:shadow-[0_0_10px_rgba(0,243,255,0.3)]' :
                        project.color === 'purple' ? 'border-purple-500/30 text-purple-300 hover:border-purple-500 hover:shadow-[0_0_10px_rgba(191,0,255,0.3)]' :
                        'border-pink-500/30 text-pink-300 hover:border-pink-500 hover:shadow-[0_0_10px_rgba(255,0,255,0.3)]'
                      }`}
                      style={{
                        opacity: hoveredId === project.id ? 1 : 0.7,
                        transform: hoveredId === project.id ? 'scale(1.05)' : 'scale(1)',
                        transition: `all 0.3s ease ${tagIndex * 0.05}s`
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Bar */}
                <div className={`flex items-center justify-between pt-4 border-t transition-colors ${
                  project.color === 'cyan' ? 'border-cyan-500/20' :
                  project.color === 'purple' ? 'border-purple-500/20' :
                  'border-pink-500/20'
                }`}>
                  <div className={`flex items-center font-mono text-[10px] uppercase tracking-widest ${
                    project.color === 'cyan' ? 'text-cyan-400' :
                    project.color === 'purple' ? 'text-purple-400' :
                    'text-pink-400'
                  }`}>
                    <Zap size={14} className="mr-2 animate-pulse" />
                    <span>DEPLOY</span>
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-cyan-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.demo}
                      className="text-gray-500 hover:text-purple-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Scan Lines */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)] pointer-events-none opacity-20" />
              
              {/* Glitch Overlay */}
              <div className="glitch-overlay" />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/HARESH1501"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ai-secondary inline-flex items-center gap-3"
          >
            <Github className="w-5 h-5" />
            <span>VIEW ALL PROJECTS</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project Modal */}
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
