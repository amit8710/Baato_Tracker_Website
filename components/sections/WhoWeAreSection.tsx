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
      className='py-12 lg:py-16 overflow-hidden'
      style={{ background: 'var(--background)', color: 'var(--foreground)' }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
          {/* LEFT CONTENT */}
          <div className='max-w-xl'>
            <span
              className='block text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-3'
              style={{ color: 'var(--teal-primary)' }}
            >
              Who We Are
            </span>

            <h2
              className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4'
              style={{ color: 'var(--teal-dark)' }}
            >
              Smart School Transportation For Modern Schools
            </h2>

            <p
              className='text-base leading-7 mb-6 max-w-lg'
              style={{ color: 'var(--text-muted)' }}
            >
              Bato Tracker helps schools, parents, and drivers stay connected
              through real-time school bus tracking, instant notifications,
              route monitoring, and enhanced student safety.
            </p>

            <Button text='More About Us' href='/about' />
          </div>

          {/* RIGHT SIDE */}
          <div className='relative flex justify-center lg:justify-end'>
            {/* FLOATING CARDS (DESKTOP ONLY) */}
            <motion.div
              variants={cardContainerVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 flex-col gap-4 z-10'
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
                  title='Real-time Tracking'
                  description='Live location updates'
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
                <FeatureCard
                  icon={<FaBell />}
                  title='Instant Alerts'
                  description='Pickup & drop notifications'
                />
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
                  title='Safe & Secure'
                  description="Your child's safety is our priority"
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
                <FeatureCard
                  icon={<FaChartBar />}
                  title='Smart & Reliable'
                  description='Efficient routes and on-time updates'
                />
              </motion.div>
            </motion.div>

            {/* PHONE MOCKUP */}
            <motion.div
              variants={phoneVariants}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <Image
                src='/mobile1.png'
                alt='Bato Tracker Mobile App'
                width={420}
                height={800}
                priority
                className='w-[220px] sm:w-[250px] md:w-[280px] lg:w-[320px] h-auto object-contain drop-shadow-2xl'
              />
            </motion.div>
          </div>
        </div>

        {/* MOBILE CARDS */}
        <div className='lg:hidden mt-10 grid sm:grid-cols-2 gap-4 justify-items-center'>
          <FeatureCard
            icon={<FaMapMarkerAlt />}
            title='Real-time Tracking'
            description='Live location updates'
          />

          <FeatureCard
            icon={<FaBell />}
            title='Instant Alerts'
            description='Pickup & drop notifications'
          />

          <FeatureCard
            icon={<FaShieldAlt />}
            title='Safe & Secure'
            description="Your child's safety is our priority"
          />

          <FeatureCard
            icon={<FaChartBar />}
            title='Smart & Reliable'
            description='Efficient routes and on-time updates'
          />
        </div>
      </div>
    </section>
  )
}
