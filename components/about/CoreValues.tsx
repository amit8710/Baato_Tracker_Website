'use client'

import { motion } from 'framer-motion'
import FeatureCard from '../cards/FeatureCard'
import {
  FaShieldAlt,
  FaClock,
  FaMapMarkedAlt,
  FaBell,
  FaUsers,
  FaMobileAlt
} from 'react-icons/fa'

const values = [
  {
    icon: FaShieldAlt,
    title: 'Safe & Secure',
    desc: 'Ensuring maximum safety for every student during transportation.'
  },
  {
    icon: FaClock,
    title: 'Real-Time Tracking',
    desc: 'Live GPS tracking with instant location updates.'
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Accurate Routes',
    desc: 'Optimized routes for efficient and timely travel.'
  },
  {
    icon: FaBell,
    title: 'Instant Alerts',
    desc: 'Get notifications for pickup, drop, and delays.'
  },
  {
    icon: FaUsers,
    title: 'Parent Friendly',
    desc: 'Easy access for parents to monitor their child’s journey.'
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Access',
    desc: 'Fully responsive platform accessible on any device.'
  }
]

export default function CoreValues () {
  return (
    <section
      className='py-10 overflow-hidden'
      style={{ backgroundColor: 'var(--teal-light)' }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className='text-center mb-8'
        >
          <h2
            className='text-2xl md:text-3xl font-bold'
            style={{ color: 'var(--text-highlight)' }}
          >
            Why Choose Us
          </h2>

          <p
            className='mt-2 text-sm md:text-base'
            style={{ color: 'var(--text-muted)' }}
          >
            Key features that make Bato Tracker reliable and smart
          </p>
        </motion.div>

        {/* Cards */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
          {values.map((item, index) => {
            const Icon = item.icon

            let initialAnimation = { opacity: 0, y: 100 }

            if (index % 3 === 0) {
              initialAnimation = { opacity: 0, x: -180 }
            } else if (index % 3 === 1) {
              initialAnimation = { opacity: 0, y: 100 }
            } else {
              initialAnimation = { opacity: 0, x: 180 }
            }

            return (
              <motion.div
                key={index}
                initial={initialAnimation}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <FeatureCard
                  icon={<Icon className='text-2xl text-teal-primary' />}
                  title={item.title}
                  description={item.desc}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
