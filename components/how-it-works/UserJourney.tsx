'use client'

import { motion } from 'framer-motion'
import { HiChevronDoubleRight, HiChevronDoubleDown } from 'react-icons/hi'

import JourneyCard from '@/components/cards/JourneyCard'
import { journeyData } from '@/data/journeyData'

export default function UserJourney () {
  return (
    <section
      className='overflow-hidden py-20'
      style={{ backgroundColor: 'var(--teal-light)' }}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: 'easeOut'
          }}
          className='mx-auto mb-16 max-w-3xl text-center'
        >
          <span
            className='section-label'
            style={{ color: 'var(--text-highlight)' }}
          >
            User Journey
          </span>

          <h2
            className='heading-2 mt-4'
            style={{ color: 'var(--text-highlight)' }}
          >
            How Every Journey Happens
          </h2>

          <p className='body-text mt-6' style={{ color: 'var(--text-muted)' }}>
            From the moment the school bus starts its journey until every
            student reaches school safely, Baato Tracker keeps parents, schools,
            and drivers connected through real-time technology.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className='hidden items-start justify-between gap-3 lg:flex'>
          {journeyData.map((item, index) => (
            <div key={item.id} className='flex items-center'>
              <div className='w-64'>
                <JourneyCard
                  index={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>

              {index !== journeyData.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2
                  }}
                  className='mx-3'
                >
                  <motion.div
                    animate={{
                      x: [0, 8, 0]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity
                    }}
                  >
                    <HiChevronDoubleRight
                      size={36}
                      style={{
                        color: 'var(--teal-dark)'
                      }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className='space-y-6 lg:hidden'>
          {journeyData.map((item, index) => (
            <div key={item.id}>
              <JourneyCard
                index={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />

              {index !== journeyData.length - 1 && (
                <motion.div
                  animate={{
                    y: [0, 8, 0]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity
                  }}
                  className='flex justify-center py-4'
                >
                  <HiChevronDoubleDown
                    size={34}
                    style={{
                      color: 'var(--teal-dark)'
                    }}
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
