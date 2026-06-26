'use client'

import { motion } from 'framer-motion'
import FeatureActionCard from '@/components/cards/FeatureActionCard'
import { featureActionData } from '@/data/featureActionData'

export default function FeaturesAction () {
  return (
    <section className='py-20' style={{ backgroundColor: 'var(--teal-light)' }}>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading (kept simple animation or you can remove too if needed) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='text-center max-w-3xl mx-auto mb-14'
        >
          <span
            className='uppercase tracking-[0.25em] text-sm font-semibold'
            style={{ color: 'var(--text-highlight)' }}
          >
            Features in Action
          </span>

          <h2
            className='mt-4 text-3xl md:text-4xl lg:text-5xl font-bold'
            style={{ color: 'var(--teal-dark)' }}
          >
            Everything You Need for Smart School Transportation
          </h2>

          <p
            className='mt-6 text-base md:text-lg leading-8'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Bato Tracker combines powerful technology with an easy-to-use
            platform, helping schools, parents, and drivers stay connected
            through every journey.
          </p>
        </motion.div>

        {/* Features Grid (NO animation wrapper) */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
