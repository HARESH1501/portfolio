'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, CheckCircle, AlertCircle, Target, Lightbulb } from 'lucide-react'

interface ProjectModalProps {
  project: any
  onClose: () => void
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-dark-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`p-6 bg-gradient-to-r ${project.gradient} text-white relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center mb-4">
              <div className="p-3 bg-white/20 rounded-lg mr-4">
                <project.icon size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">{project.title}</h2>
                <p className="text-white/80 text-lg">{project.subtitle}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Overview */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Target className="mr-2 text-primary-600" size={24} />
                Project Overview
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {project.details.overview}
              </p>
            </section>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <AlertCircle className="mr-2 text-red-500" size={20} />
                  Problem Statement
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.details.problem}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Lightbulb className="mr-2 text-yellow-500" size={20} />
                  Why This Project?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.details.why}
                </p>
              </section>
            </div>

            {/* Tech Stack */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.details.techStack.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Architecture */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Architecture & Workflow
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.details.architecture}
              </p>
            </section>

            {/* Key Features */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.details.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={16} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Challenges Faced
                </h3>
                <ul className="space-y-2">
                  {project.details.challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Solutions Implemented
                </h3>
                <ul className="space-y-2">
                  {project.details.solutions.map((solution: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Impact */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Outcome & Impact
              </h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.details.impact}
                </p>
              </div>
            </section>

            {/* Links */}
            <section>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Project Links
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.details.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </a>
                
                {project.details.demo && (
                  <a
                    href={project.details.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal