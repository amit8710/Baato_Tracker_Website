'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import Button from '@/components/common/Button'
import FeatureCard from '../cards/FeatureCard'
import { experienceData } from '@/data/experienceData'
import ExperienceItem from '../cards/ExperienceItem'

export default function AppExperience () {
  return (
    <section
      className='py-20 lg:py-14'
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-10 lg:gap-12 items-center'>
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: 'easeOut'
            }}
            className='flex justify-center'
          >
            <Image
              src='/Transportation-02.png'
              alt='Bato Tracker Mobile App'
              width={340}
              height={620}
              priority
              className='w-[260px] md:w-[300px] lg:w-[340px] h-auto object-contain'
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              ease: 'easeOut'
            }}
          >
            <span
              className='uppercase tracking-[0.25em] text-sm font-semibold'
              style={{ color: 'var(--teal-primary)' }}
            >
              Mobile Experience
            </span>

            <h2
              className='mt-3 text-2xl md:text-4xl font-bold leading-tight'
              style={{ color: 'var(--teal-dark)' }}
            >
              Everything You Need,
              <br />
              Right in Your Pocket
            </h2>

            <p
              className='mt-4 text-base leading-7'
              style={{ color: 'var(--text-mainlight)' }}
            >
              The Bato Tracker mobile app helps parents, schools and drivers
              stay connected through live GPS tracking, instant notifications
              and an intuitive interface designed for everyday use.
            </p>

            {/* Experience List */}
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch'>
              {experienceData.map(item => {
                const Icon = item.icon

                return (
                  <div key={item.id} className='h-full'>
                    <FeatureCard
                      icon={<Icon />}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                )
              })}
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                delay: 0.8
              }}
              className='mt-8 flex justify-center lg:justify-end'
            >
              <Button text='Download the App' href='#' />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
