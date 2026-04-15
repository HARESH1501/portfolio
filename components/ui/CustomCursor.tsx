'use client'

import { useEffect, useState } from 'react'

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      )
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return (
    <>
      {/* Main Cursor */}
      <div
        className="fixed w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease'
        }}
      >
        <div className={`w-full h-full border-2 border-cyan-400 rounded-full transition-all duration-200 ${
          isPointer ? 'scale-150' : 'scale-100'
        }`} />
      </div>

      {/* Trailing Cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-[9998]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.15s ease-out'
        }}
      >
        <div className={`w-full h-full bg-cyan-400/20 rounded-full blur-sm transition-all duration-200 ${
          isPointer ? 'scale-150' : 'scale-100'
        }`} />
      </div>
    </>
  )
}
