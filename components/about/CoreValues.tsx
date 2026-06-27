'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import FeatureCard from '../cards/FeatureCard'
import { featureActionData } from '@/data/featureActionData'

const phoneVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    y: 80
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.25
    }
  }
}
const leftCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.55,
    x: 160
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 1.8 + index * 0.25,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

const rightCardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.55,
    x: -160
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 2,
      delay: 1.8 + index * 0.25,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

export default function CoreValues () {
  return (
    <section
      className='py-12 lg:py-16 overflow-hidden'
      style={{ backgroundColor: 'var(--teal-light)' }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
          className='text-center mb-14'
        >
          <span
            className='block text-sm font-semibold uppercase tracking-[0.2em] mb-2'
            style={{ color: 'var(--teal-primary)' }}
          >
            Why Choose Us
          </span>

          <h2
            className='text-3xl lg:text-4xl font-bold'
            style={{ color: 'var(--text-highlight)' }}
          >
            Smart Features Built For Every Journey
          </h2>

          <p
            className='mt-4 max-w-2xl mx-auto text-base leading-7'
            style={{ color: 'var(--text-muted)' }}
          >
            Bato Tracker combines safety, technology, and convenience to make
            school transportation smarter for schools, parents, and drivers.
          </p>
        </motion.div>
        {/* Desktop Layout */}
        <div className='relative hidden lg:flex items-center justify-center min-h-[760px]'>
          {/* Left Cards */}
          <div className='absolute left-[8%] xl:left-[12%] top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20'>
            {featureActionData.slice(0, 3).map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={leftCardVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    y: {
                      duration: 5,
                      delay: 4.2 + index * 0.25,
                      repeat: Infinity,
                      repeatType: 'mirror',
                      ease: 'easeInOut'
                    }
                  }}
                >
                  <FeatureCard
                    icon={<Icon />}
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              )
            })}
          </div>

          {/* Phone */}
          <motion.div
            variants={phoneVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='z-10'
          >
            <Image
              src='/mobile1.png'
              alt='Bato Tracker Mobile App'
              width={420}
              height={800}
              priority
              className='w-[360px] xl:w-[400px] h-auto object-contain drop-shadow-2xl'
            />
          </motion.div>

          {/* Right Cards */}
          <div className='absolute right-[8%] xl:right-[12%] top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20'>
            {featureActionData.slice(3, 6).map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={rightCardVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.2
                    }
                  }}
                >
                  <FeatureCard
                    icon={<Icon />}
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
        {/* Mobile Layout */}
        <div className='lg:hidden'>
          {/* Phone */}
          <motion.div
            variants={phoneVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='flex justify-center mb-8'
          >
            <Image
              src='/mobile1.png'
              alt='Bato Tracker Mobile App'
              width={320}
              height={620}
              priority
              className='w-[220px] sm:w-[250px] h-auto object-contain drop-shadow-2xl'
            />
          </motion.div>

          {/* Cards */}
          <motion.div
            variants={cardContainerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid sm:grid-cols-2 gap-4 justify-items-center'
          >
            {featureActionData.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  variants={
                    index % 2 === 0 ? leftCardVariants : rightCardVariants
                  }
                >
                  <FeatureCard
                    icon={<Icon />}
                    title={item.title}
                    description={item.description}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
