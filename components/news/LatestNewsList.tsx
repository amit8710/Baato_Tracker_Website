'use client'

import Link from 'next/link'

import LatestNewsItem from './LatestNewsItem'
import { NewsItem } from '@/data/newsData'

type LatestNewsListProps = {
  articles: NewsItem[]
}

export default function LatestNewsList ({ articles }: LatestNewsListProps) {
  return (
    <div className='w-full'>
      {/* Header */}
      <div className='mb-6 flex items-center justify-between'>
        <h2
          className='text-3xl font-bold'
          style={{
            color: 'var(--text-mainlight)'
          }}
        >
          Latest News
        </h2>

        <Link
          href='/news-updates'
          className='text-sm font-semibold transition-opacity hover:opacity-80'
          style={{
            color: 'var(--teal-primary)'
          }}
        >
          View All →
        </Link>
      </div>

      {/* News List */}
      <div className='space-y-5'>
        {articles.map(article => (
          <LatestNewsItem
            key={article.id}
            slug={article.slug}
            title={article.title}
            image={article.image}
            date={article.date}
            category={article.category}
          />
        ))}
      </div>
    </div>
  )
}
