'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

export const PerspectiveGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 45])
  const translateZ = useTransform(scrollYProgress, [0, 1], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#020617]"
    >
      <motion.div
        style={{
          perspective: '1000px',
          rotateX,
          translateZ,
          x: mousePos.x,
          y: mousePos.y,
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div 
          className="absolute inset-[-100%] opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          }}
        />
        
        {/* Neon Glow center */}
        <div className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] opacity-20" />
      </motion.div>
      
      {/* Scanning Laser Line */}
      <motion.div
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-[1]"
      />
    </div>
  )
}
