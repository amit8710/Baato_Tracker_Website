'use client'

import Image from 'next/image'
import Link from 'next/link'

type FeaturedNewsCardProps = {
  slug: string
  title: string
  description: string
  image: string
  date: string
  category: string
}

export default function FeaturedNewsCard ({
  slug,
  title,
  description,
  image,
  date,
  category
}: FeaturedNewsCardProps) {
  return (
    <article className='w-full'>
      <Link href={`/news-updates/${slug}`}>
        <div className='relative h-[280px] lg:h-[420px] overflow-hidden rounded-2xl cursor-pointer group'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />

          <span
            className='absolute left-5 top-5 rounded-full px-4 py-2 text-xs font-semibold text-white'
            style={{
              backgroundColor: 'var(--teal-primary)'
            }}
          >
            {category}
          </span>
        </div>
      </Link>

      <div className='mt-6'>
        <p
          className='text-sm font-medium'
          style={{
            color: 'var(--teal-primary)'
          }}
        >
          {date}
        </p>

        <Link href={`/news-updates/${slug}`}>
          <h3
            className='mt-3 text-3xl font-bold leading-tight transition-colors'
            style={{
              color: 'var(--text-mainlight)'
            }}
          >
            {title}
          </h3>
        </Link>

        <p
          className='mt-5 text-base leading-8'
          style={{
            color: '#666'
          }}
        >
          {description}
        </p>

        <Link
          href={`/news-updates/${slug}`}
          className='inline-flex items-center gap-2 mt-6 font-semibold'
          style={{
            color: 'var(--teal-primary)'
          }}
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
