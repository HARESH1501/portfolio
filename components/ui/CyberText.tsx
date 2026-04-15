'use client'

import { useEffect, useState, useCallback } from 'react'

interface CyberTextProps {
  text: string
  className?: string
  delay?: number
  animateOnHover?: boolean
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'

export const CyberText = ({ text, className = '', delay = 0, animateOnHover = false }: CyberTextProps) => {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)

  const scramble = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)

    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index]
            }
            return characters[Math.floor(Math.random() * characters.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(interval)
        setIsAnimating(false)
      }

      iteration += 1 / 3
    }, 30)
  }, [text, isAnimating])

  useEffect(() => {
    const timer = setTimeout(() => {
      scramble()
    }, delay)
    return () => clearTimeout(timer)
  }, [delay, scramble])

  return (
    <span
      className={`${className} font-mono`}
      onMouseEnter={() => animateOnHover && scramble()}
    >
      {displayText}
    </span>
  )
}
