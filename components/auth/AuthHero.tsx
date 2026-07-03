'use client'

import { motion } from 'framer-motion'

export default function AuthHero () {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className='hidden lg:flex flex-col justify-center'
    >
      <span
        className='inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold'
        style={{
          background: 'rgba(13, 148, 136, 0.12)',
          color: 'var(--teal-primary)'
        }}
      >
        🚍 Welcome to Baato Tracker
      </span>

      <h1
        className='mt-6 text-5xl font-bold leading-tight'
        style={{ color: 'var(--text-mainlight)' }}
      >
        Smart School Bus
        <br />
        Tracking System
      </h1>

      <h2
        className='mt-5 text-2xl font-semibold'
        style={{ color: 'var(--teal-primary)' }}
      >
        Safe, Reliable & Connected Transportation
      </h2>

      <p
        className='mt-6 max-w-xl text-lg leading-8'
        style={{ color: 'var(--text-light1)' }}
      >
        Baato Tracker helps parents, schools, and drivers stay connected through
        real-time bus tracking, smart route management, geo-fencing, and instant
        notifications—ensuring every student's journey is safer, more reliable,
        and completely transparent.
      </p>
    </motion.div>
  )
}
