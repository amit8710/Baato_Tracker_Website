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
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: index * 0.15,
      ease: 'easeOut'
    }
  })
}

export default function CoreValues () {
  const leftCards = featureActionData.slice(0, 3)
  const rightCards = featureActionData.slice(3, 6)

  return (
    <section
      className='overflow-hidden py-12 lg:py-16'
      style={{ backgroundColor: 'var(--teal-light)' }}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
          className='mb-16 text-center'
        >
          <span
            className='section-label'
            style={{ color: 'var(--teal-primary)' }}
          >
            Why Choose Us
          </span>

          <h2
            className='heading-2 mt-2'
            style={{ color: 'var(--text-highlight)' }}
          >
            Smart Features Built For Every Journey
          </h2>

          <p
            className='body-text mx-auto mt-4 max-w-2xl'
            style={{ color: 'var(--text-muted)' }}
          >
            Baato Tracker combines safety, technology and convenience to make
            school transportation smarter for schools, parents and drivers.
          </p>
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <div className='hidden lg:grid lg:grid-cols-[320px_1fr_320px] xl:grid-cols-[360px_420px_360px] gap-10 items-center'>
          {/* Left Cards */}
          <div className='space-y-8'>
            {leftCards.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.03
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
            className='flex justify-center'
          >
            <motion.div
              animate={{
                y: [0, -8, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Image
                src='/mobile1.png'
                alt='Baato Tracker Mobile App'
                width={420}
                height={800}
                priority
                className='w-[300px] xl:w-[360px] 2xl:w-[390px] h-auto object-contain drop-shadow-2xl'
              />
            </motion.div>
          </motion.div>

          {/* Right Cards */}
          <div className='space-y-8'>
            {rightCards.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  custom={index + 3}
                  variants={cardVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    scale: 1.03
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

        {/* ================= MOBILE ================= */}
        <div className='lg:hidden'>
          <motion.div
            variants={phoneVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='mb-10 flex justify-center'
          >
            <Image
              src='/mobile1.png'
              alt='Baato Tracker Mobile App'
              width={320}
              height={620}
              priority
              className='w-[220px] sm:w-[260px] h-auto object-contain drop-shadow-2xl'
            />
          </motion.div>

          <div className='grid gap-5 sm:grid-cols-2'>
            {featureActionData.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
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
      </div>
    </section>
  )
}
