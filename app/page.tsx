import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Certifications from '@/components/sections/Certifications'
import WhyHireMe from '@/components/sections/WhyHireMe'
import Contact from '@/components/sections/Contact'
import { MatrixRain } from '@/components/ui/MatrixRain'
import { ParticleField } from '@/components/ui/ParticleField'
import { NeuralNetwork } from '@/components/ui/NeuralNetwork'
import { FloatingElements } from '@/components/ui/FloatingElements'

export default function Home() {
  return (
    <div className="relative">
      <NeuralNetwork />
      <MatrixRain />
      <ParticleField />
      <FloatingElements />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <WhyHireMe />
        <Contact />
      </div>
    </div>
  )
}