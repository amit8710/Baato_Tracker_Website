'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type ScreenCardProps = {
  title: string
  description: string
  image: string
  delay?: number
}

export default function ScreenCard ({
  title,
  description,
  image,
  delay = 0
}: ScreenCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        delay,
        ease: 'easeOut'
      }}
      whileHover={{
        y: -12,
        scale: 1.03
      }}
      className='group'
    >
      <div
        className='rounded-[2.5rem] p-3 shadow-xl transition-all duration-500'
        style={{
          backgroundColor: 'var(--background)'
        }}
      >
        {/* Phone Frame */}
        <div
          className='relative overflow-hidden rounded-[2rem]'
          style={{
            border: '8px solid var(--teal-dark)'
          }}
        >
          <Image
            src={image}
            alt={title}
            width={320}
            height={650}
            className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105'
          />
        </div>

        {/* Content */}
        <div className='pt-6 text-center'>
          <h3
            className='text-xl font-bold'
            style={{
              color: 'var(--teal-dark)'
            }}
          >
            {title}
          </h3>

          <p
            className='mt-3 leading-7 text-sm'
            style={{
              color: 'var(--text-mainlight)'
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
