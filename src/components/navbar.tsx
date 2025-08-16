import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from '@phosphor-icons/react'
import { navLinks } from '../utils/nav-links'
import { MondillaLogo } from './mondilla-logo'
import { DarkModeToggle } from './dark-mode-toggle'
import * as Icons from './icons'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <MondillaLogo size="md" />
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {link.title}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA and Dark Mode */}
          <div className="hidden md:flex items-center gap-4">
            <DarkModeToggle />
            <motion.button 
              onClick={() => handleNavClick('#features')}
              className="rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2 font-medium text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <DarkModeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Icons.Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gray-200 dark:border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="block text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                    whileHover={{ x: 10 }}
                  >
                    {link.title}
                  </motion.a>
                ))}
                <motion.button 
                  onClick={() => handleNavClick('#features')}
                  className="w-full rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 font-medium text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
