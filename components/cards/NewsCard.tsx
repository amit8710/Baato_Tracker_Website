'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

type NewsCardProps = {
  slug: string
  image: string
  title: string
  date: string
  author: string
  category: string
  description: string
  featured?: boolean
}

export default function NewsCard ({
  slug,
  image,
  title,
  date,
  author,
  category,
  description,
  featured = false
}: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className='cursor-pointer group'
      >
        <div
          className={`relative overflow-hidden rounded-2xl ${
            featured ? 'h-64 mb-5' : 'h-24 w-28 flex-shrink-0'
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className='w-full h-full'
          >
            <Image src={image} alt={title} fill className='object-cover' />
          </motion.div>
        </div>

        {featured && (
          <>
            <div className='flex flex-wrap gap-3 text-xs mb-3'>
              <span
                className='px-3 py-1 rounded-full'
                style={{
                  background:
                    'color-mix(in srgb, var(--teal-primary) 12%, var(--background))',
                  color: 'var(--teal-dark)'
                }}
              >
                {category}
              </span>

              <span
                style={{
                  color: 'var(--teal-dark)',
                  opacity: 0.6
                }}
              >
                {date}
              </span>

              <span
                style={{
                  color: 'var(--teal-dark)',
                  opacity: 0.6
                }}
              >
                By {author}
              </span>
            </div>

            <h3
              className='text-2xl font-bold mb-3'
              style={{
                color: 'var(--teal-dark)'
              }}
            >
              {title}
            </h3>

            <p
              className='leading-7 mb-4'
              style={{
                color: 'var(--teal-dark)',
                opacity: 0.7
              }}
            >
              {description}
            </p>

            <span
              className='text-sm font-semibold'
              style={{
                color: 'var(--teal-primary)'
              }}
            >
              Read More →
            </span>
          </>
        )}
      </motion.div>
    </Link>
  )
}
