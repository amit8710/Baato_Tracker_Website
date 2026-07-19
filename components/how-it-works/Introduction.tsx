'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

import Button from '@/components/common/Button'

const features = [
  'Register your school and buses in minutes',
  'Install GPS devices for live tracking',
  'Parents can monitor buses in real time',
  'Receive instant pickup and drop notifications'
]

export default function Introduction () {
  return (
    <section className='py-20' style={{ backgroundColor: 'var(--background)' }}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid items-center gap-16 lg:grid-cols-2'>
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.5,
              ease: 'easeOut'
            }}
          >
            <Image
              src='/Transportation-02.png'
              alt='How Baato Tracker Works'
              width={650}
              height={550}
              className='rounded-3xl object-cover shadow-2xl'
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.5,
              delay: 0.2,
              ease: 'easeOut'
            }}
          >
            <span
              className='section-label'
              style={{ color: 'var(--teal-primary)' }}
            >
              How It Works
            </span>

            <h2
              className='heading-2 mt-4'
              style={{ color: 'var(--teal-dark)' }}
            >
              Simple Steps to Smart School Transportation
            </h2>

            <p
              className='body-text mt-6'
              style={{ color: 'var(--text-mainlight)' }}
            >
              Baato Tracker simplifies school transportation by connecting
              schools, drivers, parents, and students through one intelligent
              platform. From registering buses to tracking every journey in real
              time, our system ensures safety, transparency, and peace of mind
              for everyone involved.
            </p>

            {/* Features */}
            <div className='mt-8 space-y-5'>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.15
                  }}
                  className='flex items-center gap-4'
                >
                  <FaCheckCircle
                    className='flex-shrink-0 text-xl'
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.8
              }}
              className='mt-10 flex justify-end'
            >
              <div className='scale-110'>
                <Button
                  text='Explore Features'
                  href='https://play.google.com/store/apps/details?id=com.google.android.apps.classroom'
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
