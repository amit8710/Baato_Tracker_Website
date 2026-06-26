'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

type ProcessCardProps = {
  step: string
  title: string
  description: string
  image: string
  reverse?: boolean
}

export default function ProcessCard ({
  step,
  title,
  description,
  image,
  reverse = false
}: ProcessCardProps) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{
          opacity: 0,
          x: reverse ? 120 : -120
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.5,
          ease: 'easeOut'
        }}
      >
        <Image
          src={image}
          alt={title}
          width={650}
          height={450}
          className='w-full rounded-3xl shadow-xl object-cover'
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{
          opacity: 0,
          x: reverse ? -120 : 120
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.5,
          ease: 'easeOut',
          delay: 0.2
        }}
      >
        <span
          className='text-6xl lg:text-7xl font-extrabold'
          style={{
            color: 'var(--teal-light)',
            opacity: 0.3
          }}
        >
          {step}
        </span>

        <h3
          className='mt-3 text-3xl font-bold'
          style={{ color: 'var(--teal-dark)' }}
        >
          {title}
        </h3>

        <p
          className='mt-5 text-lg leading-8'
          style={{ color: 'var(--text-mainlight)' }}
        >
          {description}
        </p>

        <div
          className='mt-8 h-1 w-24 rounded-full'
          style={{
            backgroundColor: 'var(--teal-primary)'
          }}
        />
      </motion.div>
    </div>
  )
}
