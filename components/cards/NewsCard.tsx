'use client'

import Image from 'next/image'
import Link from 'next/link'

type NewsCardProps = {
  slug: string
  title: string
  description: string
  image: string
  date: string
  category: string
}

export default function NewsCard ({
  slug,
  title,
  description,
  image,
  date,
  category
}: NewsCardProps) {
  return (
    <article
      className='overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
      style={{
        borderColor: 'rgba(0,0,0,0.08)'
      }}
    >
      {/* Image */}
      <Link href={`/news-updates/${slug}`} aria-label={`Read ${title}`}>
        <div className='relative h-56 overflow-hidden cursor-pointer'>
          <Image
            src={image}
            alt={title}
            fill
            sizes='(max-width:768px) 100vw,
                   (max-width:1200px) 50vw,
                   33vw'
            className='object-cover transition-transform duration-500 hover:scale-105'
          />

          <span
            className='absolute left-4 top-4 rounded-full px-4 py-1 text-xs font-semibold text-white'
            style={{
              backgroundColor: 'var(--teal-primary)'
            }}
          >
            {category}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className='p-6'>
        <p
          className='text-sm font-medium'
          style={{
            color: 'var(--teal-primary)'
          }}
        >
          {date}
        </p>

        <Link href={`/news-updates/${slug}`} aria-label={`Open ${title}`}>
          <h3
            className='mt-3 cursor-pointer text-xl font-bold leading-8 transition-colors duration-300 hover:text-teal-600'
            style={{
              color: 'var(--text-mainlight)'
            }}
          >
            {title}
          </h3>
        </Link>

        <p
          className='mt-3 line-clamp-3 text-sm leading-7'
          style={{
            color: '#666'
          }}
        >
          {description}
        </p>

        <Link
          href={`/news-updates/${slug}`}
          className='mt-6 inline-flex items-center gap-2 font-semibold transition-all duration-300 hover:gap-3'
          style={{
            color: 'var(--teal-primary)'
          }}
        >
          Read More
          <span aria-hidden='true'>→</span>
        </Link>
      </div>
    </article>
  )
}
