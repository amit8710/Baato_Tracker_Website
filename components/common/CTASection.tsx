'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'

export default function CTASection () {
  return (
    <section className='py-16' style={{ backgroundColor: 'var(--teal-light)' }}>
      <div className='mx-auto max-w-5xl px-6 text-center lg:px-8'>
        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className='heading-2'
          style={{ color: 'var(--text-highlight)' }}
        >
          Ready to Make School Transportation Safer?
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className='body-text mx-auto mt-4 max-w-2xl'
          style={{ color: 'var(--text-light)' }}
        >
          Join Baato Tracker today and experience real-time tracking, instant
          alerts, and complete peace of mind for parents and schools.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className='mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row'
        >
          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className='scale-110'
          >
            <Button text='Get Started' href='/contact' />
          </motion.div>

          <motion.div
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className='scale-110'
          >
            <Button text='Learn More' href='/about' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
