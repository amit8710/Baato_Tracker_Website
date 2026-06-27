'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

import Button from '@/components/common/Button'
import ExperienceItem from '@/components/cards/ExperienceItem'
import { experienceData } from '@/data/experienceData'

export default function AppExperience () {
  return (
    <section className='py-20' style={{ backgroundColor: 'var(--background)' }}>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
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
              src='/app-preview.png'
              alt='Bato Tracker Mobile App'
              width={420}
              height={780}
              priority
              className='object-contain'
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
              className='mt-4 text-3xl md:text-5xl font-bold leading-tight'
              style={{ color: 'var(--teal-dark)' }}
            >
              Everything You Need,
              <br />
              Right in Your Pocket
            </h2>

            {/* <p
              className='mt-6 text-lg leading-8'
              style={{ color: 'var(--text-mainlight)' }}
            >
              The Bato Tracker mobile app helps parents, schools and drivers
              stay connected through live GPS tracking, instant notifications
              and an intuitive interface designed for everyday use.
            </p> */}

            {/* Experience List */}
            <div className='mt-10 space-y-6'>
              {experienceData.map((item, index) => (
                <ExperienceItem
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  delay={index * 0.15}
                />
              ))}
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
              className='mt-12'
            >
              <Button text='Download the App' href='#' />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
