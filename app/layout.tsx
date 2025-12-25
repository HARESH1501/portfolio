import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}