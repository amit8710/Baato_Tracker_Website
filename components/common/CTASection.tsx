'use client'

import { motion } from 'framer-motion'
import Button from '@/components/common/Button'

export default function CTASection () {
  return (
    <section className='py-16' style={{ backgroundColor: 'var(--teal-light)' }}>
      <div className='max-w-5xl mx-auto px-6 lg:px-8 text-center'>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className='text-2xl md:text-4xl font-bold leading-tight'
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
          className='mt-4 text-sm md:text-base max-w-2xl mx-auto'
          style={{ color: 'var(--text-muted)' }}
        >
          Join Bato Tracker today and experience real-time tracking, instant
          alerts, and complete peace of mind for parents and schools.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className='mt-10 flex flex-col sm:flex-row items-center justify-center gap-5'
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
