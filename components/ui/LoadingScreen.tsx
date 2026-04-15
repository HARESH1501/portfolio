'use client'

import { useEffect, useState } from 'react'
import { Cpu, Zap } from 'lucide-react'

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingText, setLoadingText] = useState('INITIALIZING NEURAL NETWORK...')

  useEffect(() => {
    const texts = [
      'INITIALIZING NEURAL NETWORK...',
      'LOADING AI MODULES...',
      'CALIBRATING SYSTEMS...',
      'ESTABLISHING CONNECTION...',
      'READY TO DEPLOY...'
    ]

    let currentIndex = 0
    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length
      setLoadingText(texts[currentIndex])
    }, 800)

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          clearInterval(textInterval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Neural Network Animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
              <Cpu className="w-12 h-12 text-white relative z-10 animate-pulse" />
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-600 opacity-50 blur-xl animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            <span className="neon-text-cyan glitch" data-text="HARESH K N">
              HARESH K N
            </span>
          </h1>
        </div>

        {/* Loading Text */}
        <div className="flex items-center justify-center gap-3 text-cyan-400 font-mono text-sm">
          <Zap className="w-4 h-4 animate-pulse" />
          <span className="tracking-wider">{loadingText}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto space-y-2">
          <div className="w-full h-2 bg-black border border-cyan-500/30 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-600 via-purple-500 to-pink-500 relative"
              style={{ width: `${progress}%`, transition: 'width 0.3s ease' }}
            >
              <div className="absolute inset-0 bg-white/40 blur-sm animate-pulse" />
            </div>
          </div>
          <div className="flex justify-between text-xs font-mono text-cyan-400">
            <span>LOADING</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  )
}
