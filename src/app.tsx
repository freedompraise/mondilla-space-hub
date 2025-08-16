import { motion } from 'framer-motion'
import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { Features } from './components/features'
import { Pricing } from './components/pricing'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export function App() {
  return (
    <motion.div 
      className="min-h-screen antialiased bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  )
}
