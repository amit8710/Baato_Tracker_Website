'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

import Button from '@/components/common/Button'

const features = [
  'Real-time school bus GPS tracking',
  'Instant pickup and drop notifications',
  'Safer transportation for every student',
  'Easy-to-use platform for parents and schools'
]

export default function AboutSection () {
  return (
    <section
      className='overflow-hidden py-20'
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid items-center gap-14 lg:grid-cols-2'>
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -180 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <Image
              src='/Transportation-02.png'
              alt='About Baato Tracker'
              width={650}
              height={500}
              className='rounded-2xl object-cover shadow-xl'
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 180 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.3,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <span
              className='section-label'
              style={{ color: 'var(--teal-primary)' }}
            >
              About Us
            </span>

            <h2
              className='heading-2 mt-4'
              style={{ color: 'var(--teal-dark)' }}
            >
              Making School Transportation Safer & Smarter
            </h2>

            <p
              className='body-text mt-6'
              style={{ color: 'var(--text-mainlight)' }}
            >
              Baato Tracker is a smart school bus tracking platform designed to
              improve student safety through live GPS tracking, real-time
              notifications, and efficient transportation management. We help
              schools, parents, and drivers stay connected every day.
            </p>

            {/* Features */}
            <div className='mt-8 space-y-4'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + index * 0.18,
                    ease: 'easeOut'
                  }}
                  className='flex items-center gap-3'
                >
                  <FaCheckCircle
                    className='text-lg'
                    style={{ color: 'var(--teal-primary)' }}
                  />

                  <span
                    className='body-text'
                    style={{ color: 'var(--text-mainlight)' }}
                  >
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 1.2,
                ease: 'easeOut'
              }}
              className='mt-10 flex justify-end'
            >
              <div className='scale-110'>
                <Button text='Contact' href='/contact' />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
