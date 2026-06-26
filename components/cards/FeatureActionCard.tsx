'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

type FeatureActionCardProps = {
  icon: IconType
  title: string
  description: string
  index: number
}

export default function FeatureActionCard ({
  icon: Icon,
  title,
  description,
  index
}: FeatureActionCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay: index * 0.15,
        ease: 'easeOut'
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.35 }
      }}
      className='group rounded-3xl p-8 h-full shadow-lg transition-all duration-300 hover:shadow-2xl'
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: 6
        }}
        transition={{ duration: 0.35 }}
        className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6'
        style={{
          backgroundColor: 'var(--teal-light)'
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
    </motion.div>
  )
}
