'use client'

import { motion, Variants } from 'framer-motion'
import FeatureActionCard from '@/components/cards/FeatureActionCard'
import { featureActionData } from '@/data/featureActionData'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 16
    }
  }
}

export default function FeaturesAction () {
  return (
    <section className='py-20' style={{ backgroundColor: 'var(--teal-light)' }}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='mx-auto mb-14 max-w-3xl text-center'
        >
          <motion.span
            variants={itemVariants}
            className='section-label'
            style={{ color: 'var(--text-highlight)' }}
          >
            Features in Action
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className='heading-2 mt-4'
            style={{ color: 'var(--teal-dark)' }}
          >
            Everything You Need for Smart School Transportation
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='body-text mt-6'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Baato Tracker combines powerful technology with an easy-to-use
            platform, helping schools, parents, and drivers stay connected
            through every journey.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {featureActionData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: 'spring',
                stiffness: 110,
                damping: 16,
                delay: index * 0.08
              }}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.25
                }
              }}
            >
              <FeatureActionCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
