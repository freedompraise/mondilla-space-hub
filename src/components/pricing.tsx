import { motion } from 'framer-motion'
import { Check, Star } from '@phosphor-icons/react'

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic',
    price: '$9',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 5 team members',
      'Basic workspace templates',
      'Real-time messaging',
      'File sharing (5GB)',
      'Email support'
    ],
    cta: 'Get Started'
  },
  {
    name: 'Standard',
    price: '$29',
    period: '/month',
    description: 'Most popular choice for growing teams',
    features: [
      'Up to 25 team members',
      'Advanced workspace templates',
      'Real-time messaging & video calls',
      'File sharing (50GB)',
      'Priority support',
      'Advanced analytics',
      'Custom integrations'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Premium',
    price: '$99',
    period: '/month',
    description: 'For large organizations with advanced needs',
    features: [
      'Unlimited team members',
      'Custom workspace templates',
      'Advanced messaging & video calls',
      'Unlimited file storage',
      '24/7 phone support',
      'Advanced analytics & reporting',
      'Custom integrations & API access',
      'Dedicated account manager'
    ],
    cta: 'Contact Sales'
  }
]

export function Pricing() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="pricing" className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black py-20 text-gray-900 dark:text-white">
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
            variants={cardVariants}
          >
            Simple, transparent{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              pricing
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl border p-8 ${
                tier.popular 
                  ? 'border-cyan-400 bg-gradient-to-b from-cyan-400/10 to-purple-500/10' 
                  : 'border-gray-200 dark:border-white/20 bg-white/50 dark:bg-white/5'
              }`}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4" weight="fill" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{tier.name}</h3>
                <p className="text-gray-600 dark:text-white/70 mb-6">{tier.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                  <span className="text-gray-600 dark:text-white/70">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center gap-3 text-gray-700 dark:text-white/80"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" weight="fill" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                    : 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/20 hover:bg-gray-200 dark:hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tier.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
