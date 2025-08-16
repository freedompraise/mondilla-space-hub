import { motion } from 'framer-motion'

interface MondillaLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function MondillaLogo({ className = '', size = 'md' }: MondillaLogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  }

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Geometric Symbol */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <defs>
            <linearGradient id="mondillaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          {/* Left triangle */}
          <path
            d="M10 45 L15 35 L20 45 Z"
            fill="url(#mondillaGradient)"
          />
          {/* Center rhombus */}
          <path
            d="M18 30 L28 25 L38 30 L28 35 Z"
            fill="url(#mondillaGradient)"
          />
          {/* Right rhombus */}
          <path
            d="M35 30 L45 25 L55 30 L45 35 Z"
            fill="url(#mondillaGradient)"
          />
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <h1 className="font-bold text-gray-900 dark:text-white text-xl tracking-tight">
          Mondilla
        </h1>
        <p className="text-sm text-gray-600 dark:text-white/70 -mt-1">
          ...Coding your ideas
        </p>
      </div>

      {/* Colored dots */}
      <div className="flex gap-1 ml-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
      </div>
    </motion.div>
  )
}
