'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

type StepCardProps = {
  icon: ReactNode
  title: string
  description: string
  isActive: boolean
}

export default function StepCard ({
  icon,
  title,
  description,
  isActive
}: StepCardProps) {
  return (
    <motion.div
      animate={{
        y: isActive ? -10 : 0,
        scale: isActive ? 1.04 : 1
      }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
      whileHover={{
        y: -8,
        scale: 1.02
      }}
      className='relative h-full'
    >
      {/* Glow */}
      {isActive && (
        <motion.div
          className='absolute inset-0 rounded-3xl blur-3xl -z-10'
          style={{
            background: 'var(--teal-light)'
          }}
          animate={{
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity
          }}
        />
      )}

      <div
        className='h-full rounded-3xl p-8 text-center transition-all duration-500'
        style={{
          background: 'var(--background)',
          border: isActive
            ? '2px solid var(--teal-primary)'
            : '1px solid var(--border-light)',
          boxShadow: isActive
            ? '0 20px 40px rgba(15,118,110,.18)'
            : '0 8px 25px rgba(15,118,110,.08)'
        }}
      >
        {/* Icon */}
        <motion.div
          animate={{
            scale: isActive ? 1.08 : 1,
            rotate: isActive ? [0, -4, 4, 0] : 0
          }}
          transition={{
            duration: 0.8
          }}
          className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl'
          style={{
            background: isActive ? 'var(--teal-primary)' : 'var(--background)',
            color: isActive ? 'var(--text-highlight)' : 'var(--teal-primary)',
            border: `2px solid var(--teal-primary)`
          }}
        >
          <div className='text-4xl'>{icon}</div>
        </motion.div>

        {/* Title */}
        <h3
          className='mb-4 text-xl font-bold'
          style={{
            color: 'var(--teal-dark)'
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className='text-sm leading-7'
          style={{
            color: 'var(--text-mainlight)'
          }}
        >
          {description}
        </p>

        {/* Accent Line */}
        <motion.div
          animate={{
            width: isActive ? '70%' : '35%'
          }}
          transition={{
            duration: 0.5
          }}
          className='mx-auto mt-7 h-1 rounded-full'
          style={{
            background: isActive ? 'var(--teal-primary)' : 'var(--teal-light)'
          }}
        />
      </div>
    </motion.div>
  )
}
