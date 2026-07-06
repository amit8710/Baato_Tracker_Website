'use client'

import { motion } from 'framer-motion'
import FeatureActionCard from '@/components/cards/FeatureActionCard'
import { featureActionData } from '@/data/featureActionData'

export default function FeaturesAction () {
  return (
    <section className='py-20' style={{ backgroundColor: 'var(--teal-light)' }}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className='mx-auto mb-14 max-w-3xl text-center'
        >
          <span
            className='section-label'
            style={{ color: 'var(--text-highlight)' }}
          >
            Features in Action
          </span>

          <h2 className='heading-2 mt-4' style={{ color: 'var(--teal-dark)' }}>
            Everything You Need for Smart School Transportation
          </h2>

          <p
            className='body-text mt-6'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Baato Tracker combines powerful technology with an easy-to-use
            platform, helping schools, parents, and drivers stay connected
            through every journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {featureActionData.map(feature => (
            <div
              key={feature.id}
              className='transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg'
            >
              <FeatureActionCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
