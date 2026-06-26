'use client'

import { motion } from 'framer-motion'
import ProcessCard from '@/components/cards/ProcessCard'
import { processData } from '@/data/processData'

export default function ProcessTimeline () {
  return (
    <section className='py-10' style={{ backgroundColor: 'var(--background)' }}>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: 'easeOut'
          }}
          className='text-center max-w-3xl mx-auto mb-10'
        >
          <span
            className='uppercase tracking-[0.2em] text-xs font-semibold'
            style={{ color: 'var(--teal-primary)' }}
          >
            Step by Step
          </span>

          <h2
            className='mt-3 text-3xl lg:text-4xl font-bold'
            style={{ color: 'var(--teal-dark)' }}
          >
            How Bato Tracker Works
          </h2>

          <p
            className='mt-4 text-base lg:text-lg leading-7'
            style={{ color: 'var(--text-mainlight)' }}
          >
            From school registration to real-time notifications, every step is
            designed to make school transportation safer, smarter, and more
            transparent for schools, parents, drivers, and students.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='space-y-14'>
          {processData.map((item, index) => (
            <div key={item.id} className='relative'>
              <ProcessCard
                step={item.step}
                title={item.title}
                description={item.description}
                image={item.image}
                reverse={index % 2 !== 0}
              />

              {/* Divider */}
              {index !== processData.length - 1 && (
                <div className='flex justify-center mt-10'>
                  <div
                    className='w-1 h-10 rounded-full'
                    style={{
                      backgroundColor: 'var(--teal-light)',
                      opacity: 0.3
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
