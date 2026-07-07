'use client'

import Image from 'next/image'
import Button from '../common/Button'
import FeatureCard from '../cards/FeatureCard'

import { motion, Variants } from 'framer-motion'

import { FaMapMarkerAlt, FaBell, FaShieldAlt, FaChartBar } from 'react-icons/fa'

const phoneVariants: Variants = {
  hidden: {
    x: -250,
    opacity: 0,
    scale: 0.85
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
}

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.25
    }
  }
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

export default function WhoWeAreSection () {
  return (
    <section
      className='overflow-hidden py-8 lg:py-12'
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid items-center gap-6 lg:grid-cols-2 lg:gap-8'>
          {/* LEFT CONTENT */}

          <div className='max-w-xl'>
            <span
              className='caption-text mb-2 block uppercase tracking-[0.2em]'
              style={{ color: 'var(--teal-dark)' }}
            >
              Who We Are
            </span>

            <h2
              className='heading-2 mb-3'
              style={{ color: 'var(--teal-primary)' }}
            >
              Connecting Schools, Parents & Students Through Smarter
              Transportation
            </h2>

            <p
              className='body-text mb-5 max-w-lg'
              style={{ color: 'var(--text-light1)' }}
            >
              Baato is a modern school transportation platform built to make
              every school journey safer, smarter, and more transparent. We
              empower schools with intelligent tracking while giving parents
              peace of mind through real-time visibility and reliable
              communication.
            </p>

            <Button text='More About Us' href='/about' />
          </div>

          {/* RIGHT SIDE */}

          <div className='relative flex justify-center lg:justify-end'>
            {/* FLOATING CARDS */}

            <motion.div
              variants={cardContainerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 lg:flex'
            >
              <motion.div
                variants={cardVariants}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <FeatureCard
                  icon={<FaMapMarkerAlt />}
                  title='School Transport'
                />
              </motion.div>

              <motion.div
                variants={cardVariants}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  delay: 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <FeatureCard icon={<FaBell />} title='Geo- fencing' />
              </motion.div>

              <motion.div
                variants={cardVariants}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  delay: 0.6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <FeatureCard
                  icon={<FaShieldAlt />}
                  title='Trusted by Parents'
                />
              </motion.div>

              <motion.div
                variants={cardVariants}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  delay: 0.9,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <FeatureCard icon={<FaChartBar />} title='Student Safety' />
              </motion.div>
            </motion.div>

            {/* PHONE MOCKUP */}

            <div className='relative z-10 flex h-[650px] w-[340px] items-center justify-center'>
              <Image
                src='/mobile2.png'
                alt='Baato Tracker Mobile App'
                fill
                className='object-contain'
                priority
              />
            </div>

            {/* BACKGROUND GLOW */}

            <motion.div
              variants={phoneVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='relative flex items-center justify-center'
            >
              <div
                className='absolute h-72 w-72 rounded-full opacity-20 blur-3xl lg:h-80 lg:w-80'
                style={{
                  backgroundColor: 'var(--teal-light)'
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* MOBILE CARDS */}

        <div className='mt-8 grid gap-4 justify-items-center sm:grid-cols-2 lg:hidden'>
          <FeatureCard icon={<FaMapMarkerAlt />} title='School Transport' />

          <FeatureCard icon={<FaBell />} title='Geo-fencing' />

          <FeatureCard icon={<FaShieldAlt />} title='Trusted by Parents' />

          <FeatureCard icon={<FaChartBar />} title='Student Safety' />
        </div>
      </div>
    </section>
  )
}
