import { motion } from 'framer-motion'
import { Envelope, Phone, MapPin } from '@phosphor-icons/react'
import { ContactForm } from './contact-form'

export function Contact() {
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
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="bg-black py-20 text-white">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            variants={itemVariants}
          >
            Get in{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              touch
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ready to transform your team's collaboration? Let's discuss how Mondilla Connect 
            can help your organization work better together.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              Let's start a conversation
            </motion.h3>
            
            <motion.p 
              className="text-white/70 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Whether you have questions about our platform, need a custom solution, 
              or want to see Mondilla Connect in action, we're here to help.
            </motion.p>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Envelope className="w-6 h-6 text-white" weight="fill" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-white/70">hello@mondilla.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" weight="fill" />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" weight="fill" />
                </div>
                <div>
                  <p className="font-medium text-white">Office</p>
                  <p className="text-white/70">San Francisco, CA</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-xl border border-white/10"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-white mb-2">Response Time</h4>
              <p className="text-white/70 text-sm">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
