import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Users, Kanban, ChatCircle } from '@phosphor-icons/react'

import { Feature } from '../utils/features-list'

interface FeatureCardProps {
  feature: Feature
}

const iconMap = {
  Users: Users,
  Kanban: Kanban,
  ChatCircle: ChatCircle,
}

export function FeatureCard({
  feature: { description, id, title, icon },
}: FeatureCardProps) {
  const offsetX = useMotionValue(-100)
  const offsetY = useMotionValue(-100)

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`

  const border = useRef<HTMLDivElement | null>(null)
  const IconComponent = iconMap[icon as keyof typeof iconMap] || Users

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) {
        return
      }

      const borderRect = border.current.getBoundingClientRect()
      offsetX.set(e.x - borderRect.x)
      offsetY.set(e.y - borderRect.y)
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [offsetX, offsetY])

  return (
    <motion.div
      key={id}
      className="relative flex-1 rounded-xl border border-gray-200 dark:border-white/20 bg-white/50 dark:bg-white/5 backdrop-blur-sm px-6 py-8 text-center hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        ref={border}
        className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-400/20 to-purple-500/20"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />
      
      <motion.div 
        className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-white mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <IconComponent className="h-8 w-8" weight="fill" />
      </motion.div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-white/70 leading-relaxed">{description}</p>
    </motion.div>
  )
}
