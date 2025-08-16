/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from 'framer-motion'
import { ArrowDown } from '@phosphor-icons/react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const handleScrollDown = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-black pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Work together,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                wherever you are
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-white/70 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Mondilla Connect brings remote teams together with shared workspaces, 
              real-time messaging, and intelligent task management.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              onClick={handleScrollDown}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Get Started
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Illustration */}
          <motion.div
            className="relative"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main illustration container */}
              <motion.div
                className="relative bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl p-8 border border-white/10 backdrop-blur-sm"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Workspace illustration */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {/* Workspace cards */}
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="w-full h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md mb-2"></div>
                    <div className="space-y-1">
                      <div className="h-2 bg-white/30 rounded w-3/4"></div>
                      <div className="h-2 bg-white/20 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="w-full h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-md mb-2"></div>
                    <div className="space-y-1">
                      <div className="h-2 bg-white/30 rounded w-2/3"></div>
                      <div className="h-2 bg-white/20 rounded w-1/3"></div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="w-full h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-md mb-2"></div>
                    <div className="space-y-1">
                      <div className="h-2 bg-white/30 rounded w-4/5"></div>
                      <div className="h-2 bg-white/20 rounded w-2/5"></div>
                    </div>
                  </div>
                </div>

                {/* Chat interface */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/40 rounded w-20 mb-1"></div>
                      <div className="h-2 bg-white/20 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-white/30 rounded w-3/4"></div>
                    <div className="h-3 bg-white/20 rounded w-1/2"></div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
