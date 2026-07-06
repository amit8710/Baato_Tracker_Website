'use client'

import Image from 'next/image'
import { motion, useAnimationControls, Variants } from 'framer-motion'

import Button from '../common/Button'

const containerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
}

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    }
  }
}

export default function HeroSection () {
  const controls = useAnimationControls()

  return (
    <section className='relative flex min-h-screen items-center overflow-hidden'>
      {/* Background Image */}

      <div className='absolute inset-0 z-0'>
        <Image
          src='/schoolbus.png'
          alt='Hero Background'
          fill
          priority
          className='object-cover'
        />
      </div>

      {/* Content */}

      <div className='relative z-10 container mx-auto px-6 lg:px-16'>
        <div className='grid items-center gap-16 lg:grid-cols-2'>
          {/* Left Side */}

          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div variants={itemVariants} className='mb-5'>
              <Button text='Request a Demo' />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className='hero-title mb-6'
              style={{ color: 'var(--teal-dark)' }}
            >
              Baato{' '}
              <span style={{ color: 'var(--teal-primary)' }}>Tracker</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className='body-large mb-10 max-w-xl'
              style={{ color: 'var(--teal-dark)' }}
            >
              Real-time school bus tracking, instant notifications, student
              safety monitoring, and seamless communication between schools and
              parents.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className='flex flex-wrap gap-4'
            >
              <Button
                text='Download App'
                href='https://play.google.com/store/apps/details?id=com.google.android.apps.classroom'
              />

              <Button text='Learn More' href='/about' />
            </motion.div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            variants={imageVariants}
            initial='hidden'
            animate='visible'
            className='flex justify-center lg:justify-end'
          >
            {/* Future Hero Illustration / Mascot */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
