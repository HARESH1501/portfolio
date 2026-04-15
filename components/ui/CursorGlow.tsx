'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring } from 'framer-motion'

export const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  const springConfig = { damping: 20, stiffness: 100 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        background: `radial-gradient(circle 400px at ${mouseX.get()}px ${mouseY.get()}px, rgba(59, 130, 246, 0.08), transparent 80%)`,
      }}
    />
  )
}
