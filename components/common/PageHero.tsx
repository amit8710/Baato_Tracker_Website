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
      className='relative flex h-95 items-center justify-center overflow-hidden md:h-112.5'
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
        className='relative z-10 px-6 text-center'
      >
        <h1 className='hero-title' style={{ color: 'var(--teal-dark)' }}>
          {companyName}
        </h1>

        <h2 className='heading-3 mt-4' style={{ color: 'var(--teal-primary)' }}>
          {pageTitle}
        </h2>
      </motion.div>

      {/* Breadcrumb
      <div className='absolute bottom-8 left-6 z-10 flex items-center gap-2 lg:left-12'>
        <Link
          href='/'
          className='nav-text transition hover:opacity-80'
          style={{ color: 'var(--teal-dark)' }}
        >
          Home
        </Link>

        <FaChevronRight
          className='text-xs opacity-70'
          style={{ color: 'var(--teal-dark)' }}
        />

        <span className='nav-text' style={{ color: 'var(--teal-dark)' }}>
          {pageTitle}
        </span>
      </div> */}
    </section>
  )
}
