import { motion } from 'framer-motion'
import { featuresList } from '../utils/features-list'
import { FeatureCard } from './feature-card'

export function Features() {
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

  return (
    <section id="features" className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 py-20 text-gray-900 dark:text-white">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            variants={containerVariants}
          >
            Everything your team needs to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              collaborate remotely
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
            variants={containerVariants}
          >
            From shared workspaces to intelligent task management, Mondilla Connect 
            provides all the tools your remote team needs to stay productive and connected.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuresList.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={containerVariants}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
        </div>
    </section>
  )
}
