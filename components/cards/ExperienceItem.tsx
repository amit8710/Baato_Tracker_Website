'use client'

import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

type ExperienceItemProps = {
  icon: IconType
  title: string
  delay?: number
}

export default function ExperienceItem ({
  icon: Icon,
  title,
  delay = 0
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay
      }}
      whileHover={{
        x: 8
      }}
      className='flex items-center gap-4 cursor-pointer'
    >
      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.12,
          rotate: 8
        }}
        transition={{
          duration: 0.3
        }}
        className='w-14 h-14 rounded-2xl flex items-center justify-center shadow-md'
        style={{
          backgroundColor: 'var(--teal-light)'
        }}
      >
        <Icon
          size={24}
          style={{
            color: 'var(--text-highlight)'
          }}
        />
      </motion.div>

      {/* Text */}
      <motion.h4
        whileHover={{ x: 4 }}
        transition={{ duration: 0.25 }}
        className='text-lg font-semibold'
        style={{
          color: 'var(--teal-dark)'
        }}
      >
        {title}
      </motion.h4>
    </motion.div>
  )
}
