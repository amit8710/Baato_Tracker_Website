'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

type JourneyCardProps = {
  icon: IconType
  title: string
  description: string
  index: number
}

export default function JourneyCard ({
  icon: Icon,
  title,
  description,
  index
}: JourneyCardProps) {
  const animation = [
    { x: -80, y: 0 },
    { x: 0, y: 80 },
    { x: 80, y: 0 },
    { x: 0, y: 80 },
    { x: -80, y: 0 }
  ]

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: animation[index]?.x ?? 0,
        y: animation[index]?.y ?? 0
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: index * 0.2,
        ease: 'easeOut'
      }}
      whileHover={{
        y: -10,
        scale: 1.03
      }}
      className='group relative rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl h-full'
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      {/* Step Number */}
      <div
        className='absolute -top-5 left-6 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg'
        style={{
          backgroundColor: 'var(--teal-dark)',
          color: 'var(--text-highlight)'
        }}
      >
        {index + 1}
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 10,
          scale: 1.15
        }}
        transition={{ duration: 0.3 }}
        className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6'
        style={{
          backgroundColor: 'var(--teal-primary)'
        }}
      >
        <Icon
          size={30}
          style={{
            color: 'var(--text-highlight)'
          }}
        />
      </motion.div>

      {/* Title */}
      <h3
        className='text-xl font-bold mb-4'
        style={{
          color: 'var(--teal-dark)'
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className='leading-7'
        style={{
          color: 'var(--text-mainlight)'
        }}
      >
        {description}
      </p>

      {/* Decorative Bottom Line */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.35 }}
        className='absolute bottom-0 left-0 h-1 rounded-full'
        style={{
          backgroundColor: 'var(--teal-primary)'
        }}
      />
    </motion.div>
  )
}
