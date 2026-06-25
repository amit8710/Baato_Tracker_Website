'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const clients = [
  '/clients/logo (2).png',
  '/clients/logo (2).png',
  '/clients/logo (2).png',
  '/clients/logo (2).png',
  '/clients/logo (2).png'
]

export default function ClientSection () {
  return (
    <section className='py-5 lg:py-6 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center mb-4'>
          <span
            className='text-xs font-semibold uppercase tracking-[0.15em]'
            style={{ color: 'var(--teal-primary)' }}
          >
            Trusted By
          </span>

          <h2
            className='mt-2 text-2xl lg:text-3xl font-bold'
            style={{ color: 'var(--teal-dark)' }}
          >
            Schools Across Nepal
          </h2>

          <p className='mt-2 text-sm' style={{ color: 'var(--text-muted)' }}>
            Trusted by schools, parents and transportation teams.
          </p>
        </div>

        {/* Logo Slider */}
        <div className='relative overflow-hidden'>
          <motion.div
            className='flex gap-8 lg:gap-10 w-max'
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className='flex items-center justify-center min-w-[110px]'
              >
                <Image
                  src={logo}
                  alt='School Logo'
                  width={110}
                  height={60}
                  className='object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300'
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
