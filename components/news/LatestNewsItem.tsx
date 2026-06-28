'use client'

import Image from 'next/image'
import Link from 'next/link'

type LatestNewsItemProps = {
  slug: string
  title: string
  image: string
  date: string
  category: string
}

export default function LatestNewsItem ({
  slug,
  title,
  image,
  date,
  category
}: LatestNewsItemProps) {
  return (
    <Link
      href={`/news-updates/${slug}`}
      className='group flex gap-5 rounded-xl p-2 transition-all duration-300 hover:bg-gray-50'
    >
      {/* Thumbnail */}
      <div className='relative h-24 w-28 flex-shrink-0 overflow-hidden rounded-xl'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col justify-center'>
        <span
          className='mb-2 text-xs font-semibold uppercase tracking-wide'
          style={{ color: 'var(--teal-primary)' }}
        >
          {category}
        </span>

        <h3
          className='line-clamp-2 text-lg font-semibold leading-7 transition-colors duration-300'
          style={{ color: 'var(--text-mainlight)' }}
        >
          {title}
        </h3>

        <p className='mt-2 text-sm' style={{ color: '#777' }}>
          {date}
        </p>
      </div>
    </Link>
  )
}
