'use client'

import Image from 'next/image'
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  Variants
} from 'framer-motion'

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
    <section className='relative min-h-screen flex items-center overflow-hidden'>
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
      <div className='container mx-auto px-6 lg:px-16 relative z-10'>
        <div className='grid lg:grid-cols-2 items-center gap-16'>
          {/* Left Side */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div variants={itemVariants} className='mb-4'>
              <Button text='Request Demo' />
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className='text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6'
              style={{ color: 'var(--teal-dark)' }}
            >
              Bato <span style={{ color: 'var(--teal-primary)' }}>Tracker</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className='text-xl lg:text-2xl max-w-xl mb-10 leading-relaxed'
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
              <Button text='Download App' href='/gettheapp' />
              <Button text='LearnMore' href='about' />
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={imageVariants}
            initial='hidden'
            animate='visible'
            className='flex justify-center lg:justify-end'
          ></motion.div>
        </div>
      </div>
    </section>
  )
}
