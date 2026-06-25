'use client'

import Link from 'next/link'
import { motion, Variants } from 'framer-motion'

import NewsCard from '@/components/cards/NewsCard'
import { newsData } from '@/data/newsData'

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7
    }
  }
}

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7
    }
  }
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const listItem: Variants = {
  hidden: {
    opacity: 0,
    x: 20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45
    }
  }
}

export default function NewsSection () {
  if (!newsData?.length) return null

  const featured = newsData[0]
  const archive = newsData.slice(1)

  return (
    <motion.section
      className='w-full py-12 lg:py-16 px-6 lg:px-8'
      style={{ background: 'var(--background)' }}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <motion.div variants={fadeUp} className='text-center mb-8 lg:mb-10'>
          <span
            className='inline-block text-sm font-semibold uppercase tracking-[0.2em] mb-3'
            style={{ color: 'var(--teal-primary)' }}
          >
            Latest Updates
          </span>

          <h2
            className='text-2xl md:text-3xl lg:text-4xl font-bold'
            style={{ color: 'var(--teal-dark)' }}
          >
            News & Updates
          </h2>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-6 lg:gap-8 items-start'>
          {/* Featured News */}
          <motion.div variants={slideLeft}>
            <p
              className='text-sm font-semibold mb-3'
              style={{ color: 'var(--teal-dark)' }}
            >
              Featured Story
            </p>

            <NewsCard
              featured
              slug={featured.slug}
              image={featured.image}
              title={featured.title}
              date={featured.date}
              author={featured.author}
              category={featured.category}
              description={featured.metaDescription}
            />
          </motion.div>

          {/* Recent News */}
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <div className='flex items-center justify-between mb-4'>
              <p
                className='text-sm font-semibold'
                style={{ color: 'var(--teal-dark)' }}
              >
                Recent News
              </p>

              <Link
                href='/news'
                className='text-sm font-semibold hover:opacity-80 transition'
                style={{ color: 'var(--teal-primary)' }}
              >
                View All →
              </Link>
            </div>

            <div className='space-y-4'>
              {archive.map(item => (
                <motion.div
                  key={item.id}
                  variants={listItem}
                  whileHover={{ x: 4 }}
                >
                  <div className='flex gap-4'>
                    <NewsCard
                      slug={item.slug}
                      image={item.image}
                      title={item.title}
                      date={item.date}
                      author={item.author}
                      category={item.category}
                      description={item.metaDescription}
                    />

                    <div className='flex-1'>
                      <p
                        className='text-xs font-medium mb-1'
                        style={{ color: 'var(--teal-primary)' }}
                      >
                        {item.category}
                      </p>

                      <h3
                        className='font-semibold leading-snug mb-2 text-base'
                        style={{ color: 'var(--teal-dark)' }}
                      >
                        {item.title}
                      </h3>

                      <p
                        className='text-xs mb-2'
                        style={{
                          color: 'var(--text-muted)'
                        }}
                      >
                        {item.date} • {item.author}
                      </p>

                      <p
                        className='text-sm line-clamp-2'
                        style={{
                          color: 'var(--text-muted)'
                        }}
                      >
                        {item.metaDescription}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
