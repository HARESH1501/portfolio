'use client'

import { useEffect, useState } from 'react'
import { Cpu, Zap, Brain, Code, Database, Shield } from 'lucide-react'

export const FloatingElements = () => {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; icon: any; delay: number }>>([])

  useEffect(() => {
    const icons = [Cpu, Zap, Brain, Code, Database, Shield]
    const newElements = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      delay: Math.random() * 5
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
      {elements.map((element) => {
        const Icon = element.icon
        return (
          <div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animation: `float 20s ease-in-out infinite`,
              animationDelay: `${element.delay}s`
            }}
          >
            <Icon className="w-8 h-8 text-cyan-400" />
          </div>
        )
      })}
    </div>
  )
}
