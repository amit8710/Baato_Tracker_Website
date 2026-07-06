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
      className='relative z-30 -mb-28 -mt-28 lg:-mb-32 lg:-mt-32'
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className='rounded-3xl border p-8 shadow-2xl backdrop-blur-md lg:p-12'
          style={{
            background: 'var(--background)',
            borderColor: 'var(--border-light)'
          }}
        >
          {/* Heading */}

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='heading-2 mb-8 uppercase'
            style={{
              color: 'var(--teal-dark)'
            }}
          >
            Stay Connected
          </motion.h2>

          {/* Form */}

          <form className='grid grid-cols-1 items-end gap-6 md:grid-cols-4'>
            {/* Name */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label
                className='body-text mb-2 block'
                style={{
                  color: 'var(--text-mainlight)'
                }}
              >
                Name
              </label>

              <motion.input
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                type='text'
                placeholder='Enter your name'
                className='body-text h-12 w-full rounded-xl border px-4 outline-none transition-all duration-300 focus:ring-2'
                style={{
                  background: 'var(--text-highlight)',
                  color: 'var(--text-mainlight)',
                  borderColor: 'var(--border-light)',
                  caretColor: 'var(--teal-primary)'
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
                className='body-text mb-2 block'
                style={{
                  color: 'var(--text-mainlight)'
                }}
              >
                Phone
              </label>

              <motion.input
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                type='tel'
                placeholder='Phone number'
                className='body-text h-12 w-full rounded-xl border px-4 outline-none transition-all duration-300 focus:ring-2'
                style={{
                  background: 'var(--text-highlight)',
                  color: 'var(--text-mainlight)',
                  borderColor: 'var(--border-light)',
                  caretColor: 'var(--teal-primary)'
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
                className='body-text mb-2 block'
                style={{
                  color: 'var(--text-mainlight)'
                }}
              >
                Email
              </label>

              <motion.input
                whileHover={{ scale: 1.02 }}
                whileFocus={{ scale: 1.02 }}
                type='email'
                placeholder='Email address'
                className='body-text h-12 w-full rounded-xl border px-4 outline-none transition-all duration-300 focus:ring-2'
                style={{
                  background: 'var(--text-highlight)',
                  color: 'var(--text-mainlight)',
                  borderColor: 'var(--border-light)',
                  caretColor: 'var(--teal-primary)'
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
              <Button text='Submit' href='#' />
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  )
}
