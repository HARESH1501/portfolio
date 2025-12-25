'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, ExternalLink, Award, Calendar, Building } from 'lucide-react'

interface CertificateModalProps {
  certificate: any
  onClose: () => void
}

const CertificateModal = ({ certificate, onClose }: CertificateModalProps) => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = certificate.certificateUrl
    link.download = `${certificate.title.replace(/\s+/g, '_')}_Certificate.jpg`
    link.click()
  }

  const handleViewFullSize = () => {
    window.open(certificate.certificateUrl, '_blank')
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
          <div className={`p-6 bg-gradient-to-r ${certificate.color} text-white relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="flex items-center mb-4">
              <div className="p-3 bg-white/20 rounded-lg mr-4">
                <certificate.icon size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{certificate.title}</h2>
                <p className="text-white/80 text-lg">{certificate.provider}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar size={16} />
                <span>{certificate.date}</span>
              </div>
              {certificate.institution && (
                <div className="flex items-center space-x-2">
                  <Building size={16} />
                  <span>{certificate.institution}</span>
                </div>
              )}
              {certificate.score && (
                <div className="flex items-center space-x-2">
                  <Award size={16} />
                  <span>Score: {certificate.score}</span>
                </div>
              )}
            </div>
          </div>

          {/* Certificate Image */}
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Certificate
              </h3>
              
              <div className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 mb-4">
                <img
                  src={certificate.certificateUrl}
                  alt={`${certificate.title} Certificate`}
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNlcnRpZmljYXRlIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
                  }}
                />
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={handleViewFullSize}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View Full Size</span>
                </button>
                
                <button
                  onClick={handleDownload}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Download size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Course Details
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Provider:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{certificate.provider}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Date:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{certificate.date}</span>
                  </div>
                  {certificate.duration && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{certificate.duration}</span>
                    </div>
                  )}
                  {certificate.score && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Score:</span>
                      <span className="font-semibold text-primary-600">{certificate.score}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Skills Acquired
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                About This Certification
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {certificate.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CertificateModal