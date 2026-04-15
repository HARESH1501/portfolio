'use client'

import { useEffect, useRef } from 'react'

export const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number

      constructor() {
        this.x = Math.random() * (canvas?.width || 800)
        this.y = Math.random() * (canvas?.height || 600)
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 3 + 2
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > (canvas?.width || 800)) this.vx *= -1
        if (this.y < 0 || this.y > (canvas?.height || 600)) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = '#00f3ff'
        ctx.shadowBlur = 15
        ctx.shadowColor = '#00f3ff'
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    const nodes: Node[] = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      nodes.push(new Node())
    }

    const drawConnections = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = 1 - distance / 150
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            )
            gradient.addColorStop(0, `rgba(0, 243, 255, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(191, 0, 255, ${opacity})`)
            gradient.addColorStop(1, `rgba(0, 243, 255, ${opacity})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = opacity * 2
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawConnections()

      nodes.forEach(node => {
        node.update()
        node.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        pointerEvents: 'none',
        opacity: 0.4
      }}
    />
  )
}
