'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

type DownloadStepCardProps = {
  step: string
  icon: IconType
  title: string
  description: string
  delay?: number
}

export default function DownloadStepCard ({
  step,
  icon: Icon,
  title,
  description,
  delay = 0
}: DownloadStepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay,
        ease: 'easeOut'
      }}
      whileHover={{
        y: -10,
        scale: 1.03
      }}
      className='relative rounded-3xl p-8 shadow-xl transition-all duration-500'
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      {/* Step Number */}
      <div
        className='absolute -top-5 left-8 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg'
        style={{
          backgroundColor: 'var(--teal-dark)',
          color: 'var(--text-highlight)'
        }}
      >
        {step}
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 10
        }}
        transition={{ duration: 0.3 }}
        className='w-16 h-16 rounded-2xl flex items-center justify-center mt-6'
        style={{
          backgroundColor: 'var(--teal-light)'
        }}
      >
        <Icon
          size={28}
          style={{
            color: 'var(--text-highlight)'
          }}
        />
      </motion.div>

      {/* Title */}
      <h3
        className='mt-6 text-2xl font-bold'
        style={{
          color: 'var(--teal-dark)'
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className='mt-4 leading-7'
        style={{
          color: 'var(--text-mainlight)'
        }}
      >
        {description}
      </p>
    </motion.div>
  )
}
