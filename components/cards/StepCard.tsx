'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type StepCardProps = {
  icon: ReactNode
  title: string
  description: string
  stepNumber: string
  isUnlocked: boolean
  isActive: boolean
  onClick: () => void
}

export default function StepCard ({
  icon,
  title,
  description,
  stepNumber,
  isUnlocked,
  isActive,
  onClick
}: StepCardProps) {
  return (
    <div
      className='flex flex-col items-center text-center relative z-10 cursor-pointer'
      onClick={onClick}
    >
      {/* Step Number */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className='text-xs font-semibold tracking-[0.2em] uppercase mb-3'
            style={{
              color: isActive
                ? 'var(--teal-primary)'
                : 'rgba(13, 148, 136, 0.5)'
            }}
          >
            {stepNumber}
          </motion.span>
        )}
      </AnimatePresence>

      {!isUnlocked && <div className='h-6 mb-3' />}

      {/* Icon Circle */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 220,
              damping: 15
            }}
            whileHover={{
              scale: 1.08,
              y: -5
            }}
            className='relative w-28 h-28 rounded-full flex items-center justify-center mb-6 shadow-xl backdrop-blur-sm'
            style={{
              backgroundColor: isActive
                ? 'var(--teal-primary)'
                : 'rgba(255,255,255,0.85)',
              border: `2px solid ${
                isActive ? 'var(--teal-primary)' : 'rgba(13,148,136,0.15)'
              }`
            }}
          >
            {/* Glow Effect */}
            {isActive && (
              <motion.div
                className='absolute inset-0 rounded-full'
                style={{
                  backgroundColor: 'var(--teal-primary)'
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.08, 0.25]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity
                }}
              />
            )}

            {/* Pulse Ring */}
            <motion.div
              className='absolute inset-0 rounded-full border-2'
              style={{
                borderColor: 'var(--teal-primary)'
              }}
              animate={{
                scale: [1, 1.18],
                opacity: [0.4, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />

            {/* Icon */}
            <motion.div
              animate={
                isActive
                  ? {
                      y: [0, -8, 0]
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className='relative z-10 text-5xl'
              style={{
                color: isActive ? '#ffffff' : 'var(--teal-primary)'
              }}
            >
              {icon}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isUnlocked && <div className='w-28 h-28 mb-6' />}

      {/* Content */}
      <AnimatePresence>
        {isUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-[240px]'
          >
            <h3
              className='text-xl font-bold mb-3'
              style={{
                color: 'var(--text-light)'
              }}
            >
              {title}
            </h3>

            <p
              className='text-sm leading-7'
              style={{
                color: 'var(--text-light)'
              }}
            >
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
