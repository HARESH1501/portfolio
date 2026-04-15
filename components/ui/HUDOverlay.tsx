'use client'

import { motion } from 'framer-motion'

export const HUDOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[50]">
      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-blue-500/30 rounded-tl-xl" />
      <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-blue-500/30 rounded-tr-xl" />
      <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-blue-500/30 rounded-bl-xl" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-blue-500/30 rounded-br-xl" />

      {/* Floating Indicators */}
      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-10 left-12 flex items-center gap-2 text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.2em]"
      >
        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
        System Status: Operational
      </motion.div>

      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 right-12 text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.2em]"
      >
        Neural Uplink: Connected
      </motion.div>

      {/* Side HUD Lines */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={{ width: i % 2 === 0 ? 12 : 6 }}
            className="h-[1px] bg-blue-500/40"
          />
        ))}
      </div>
      
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-end gap-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={{ width: i % 2 === 0 ? 12 : 6 }}
            className="h-[1px] bg-blue-500/40"
          />
        ))}
      </div>
    </div>
  )
}
