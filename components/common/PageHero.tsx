'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'

type PageHeroProps = {
  companyName: string
  pageTitle: string
  backgroundImage: string
}

export default function PageHero ({
  companyName,
  pageTitle,
  backgroundImage
}: PageHeroProps) {
  return (
    <section
      className='relative h-[380px] md:h-[450px] flex items-center justify-center overflow-hidden'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='relative z-10 text-center px-6'
      >
        <h1
          className='text-4xl md:text-5xl lg:text-6xl font-bold'
          style={{ color: 'var(--teal-dark)' }}
        >
          {companyName}
        </h1>

        <h2
          className='mt-4 text-xl md:text-2xl font-medium'
          style={{ color: 'var(--teal-primary)' }}
        >
          {pageTitle}
        </h2>
      </motion.div>

      {/* Breadcrumb */}
      <div className='absolute bottom-8 left-6 lg:left-12 z-10 flex items-center gap-2 text-sm'>
        <Link
          href='/'
          className='transition hover:opacity-80'
          style={{ color: 'var(--teal-dark)' }}
        >
          Home
        </Link>

        <FaChevronRight className='text-xs opacity-70' />

        <span style={{ color: 'var(--teal-dark)' }}>{pageTitle}</span>
      </div>
    </section>
  )
}
