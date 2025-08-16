import { motion } from 'framer-motion'
import { SocialMediaList } from './social-media'
import { MondillaLogo } from './mondilla-logo'

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <footer className="border-t border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-black py-16 text-gray-600 dark:text-white/60">
      <div className="container">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo and Description */}
          <motion.div className="flex-1 max-w-md" variants={itemVariants}>
            <MondillaLogo size="md" className="mb-6" />
            <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-8">
              Empowering remote teams to collaborate seamlessly with intelligent 
              workspaces, real-time communication, and powerful project management tools.
            </p>
            <SocialMediaList />
          </motion.div>

          {/* Links Section */}
          <motion.div className="flex flex-col sm:flex-row gap-8 sm:gap-16" variants={itemVariants}>
            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="hover:text-gray-900 dark:hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-12 mt-12 border-t border-gray-200 dark:border-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="text-center sm:text-left" variants={itemVariants}>
            <span>
              &copy; {new Date().getFullYear()} Mondilla Connect. All rights reserved.
            </span>
          </motion.div>
          <motion.div className="text-center sm:text-right" variants={itemVariants}>
            <span className="text-sm text-gray-500 dark:text-white/50">
              Made with ❤️ for remote teams
            </span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
