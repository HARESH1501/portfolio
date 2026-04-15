import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import { PerspectiveGrid } from '@/components/ui/PerspectiveGrid'
import { HUDOverlay } from '@/components/ui/HUDOverlay'
import { CursorGlow } from '@/components/ui/CursorGlow'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { LoadingScreen } from '@/components/ui/LoadingScreen'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Haresh K N - Machine Learning Engineer & AI Specialist',
  description: 'Computer Science Engineering student specializing in Machine Learning, AI, and Computer Vision. Expert in Python, TensorFlow, OpenCV, and building intelligent ML applications.',
  keywords: 'Machine Learning, AI, Computer Vision, Python, TensorFlow, Deep Learning, Neural Networks, Portfolio, Haresh K N',
  authors: [{ name: 'Haresh K N' }],
  openGraph: {
    title: 'Haresh K N - Machine Learning Engineer & AI Specialist',
    description: 'Computer Science Engineering student specializing in Machine Learning, AI, and Computer Vision.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-white">
        <ThemeProvider>
          <LoadingScreen />
          <CustomCursor />
          <PerspectiveGrid />
          <HUDOverlay />
          <CursorGlow />
          <Navigation />
          <main className="relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}