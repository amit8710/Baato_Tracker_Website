'use client'

import { motion } from 'framer-motion'
import Button from '../common/Button'

export default function StayConnectedSection () {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className='relative z-30 -mt-28 lg:-mt-32 -mb-28 lg:-mb-32'
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <motion.div
          animate={{
            y: [0, -6, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className='rounded-2xl shadow-2xl px-8 lg:px-12 py-10 border'
          style={{
            background: 'var(--text-highlight)',
            borderColor: 'rgba(255,255,255,0.15)'
          }}
        >
          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='text-2xl lg:text-3xl font-bold uppercase mb-8'
            style={{
              color: 'var(--teal-dark)'
            }}
          >
            Stay Connected
          </motion.h2>

          {/* Form */}

          <form className='grid grid-cols-1 md:grid-cols-4 gap-6 items-end'>
            {/* Name */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label
                className='block text-sm font-semibold mb-2'
                style={{
                  color: 'var(--text-light)'
                }}
              >
                Name
              </label>

              <motion.input
                whileHover={{
                  scale: 1.02
                }}
                whileFocus={{
                  scale: 1.02
                }}
                type='text'
                placeholder='Enter your name'
                className='w-full h-12 rounded-lg px-4 border outline-none transition-all duration-300'
                style={{
                  background: '#fff',
                  color: 'var(--text-mainlight)',
                  borderColor: '#d1d5db'
                }}
              />
            </motion.div>

            {/* Phone */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label
                className='block text-sm font-semibold mb-2'
                style={{
                  color: 'var(--text-light)'
                }}
              >
                Phone
              </label>

              <motion.input
                whileHover={{
                  scale: 1.02
                }}
                whileFocus={{
                  scale: 1.02
                }}
                type='tel'
                placeholder='Phone number'
                className='w-full h-12 rounded-lg px-4 border outline-none transition-all duration-300'
                style={{
                  background: '#fff',
                  color: 'var(--text-mainlight)',
                  borderColor: '#d1d5db'
                }}
              />
            </motion.div>

            {/* Email */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label
                className='block text-sm font-semibold mb-2'
                style={{
                  color: 'var(--text-light)'
                }}
              >
                Email
              </label>

              <motion.input
                whileHover={{
                  scale: 1.02
                }}
                whileFocus={{
                  scale: 1.02
                }}
                type='email'
                placeholder='Email address'
                className='w-full h-12 rounded-lg px-4 border outline-none transition-all duration-300'
                style={{
                  background: '#fff',
                  color: 'var(--text-mainlight)',
                  borderColor: '#d1d5db'
                }}
              />
            </motion.div>

            {/* Submit */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className='flex md:justify-end'
            >
              <Button text='Submit' href='#' variant='primary' />
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}
