import Image from 'next/image'
import { notFound } from 'next/navigation'

import { newsData } from '@/data/newsData'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function NewsDetailPage ({ params }: Props) {
  const { slug } = await params

  const article = newsData.find(item => item.slug === slug)

  if (!article) {
    notFound()
  }

  return (
    <main className='py-16' style={{ backgroundColor: 'var(--background)' }}>
      <div className='max-w-5xl mx-auto px-6 lg:px-8'>
        {/* Image */}
        <div className='relative h-[280px] md:h-[500px] overflow-hidden rounded-3xl'>
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className='object-cover'
          />
        </div>

        {/* Category */}
        <span
          className='inline-block mt-8 rounded-full px-4 py-2 text-sm font-semibold text-white'
          style={{
            backgroundColor: 'var(--teal-primary)'
          }}
        >
          {article.category}
        </span>

        {/* Date & Author */}
        <div
          className='mt-5 flex flex-wrap gap-6 text-sm'
          style={{ color: '#777' }}
        >
          <span>{article.date}</span>
          <span>By {article.author}</span>
        </div>

        {/* Title */}
        <h1
          className='mt-6 text-4xl font-bold leading-tight'
          style={{
            color: 'var(--text-mainlight)'
          }}
        >
          {article.title}
        </h1>

        {/* Content */}
        <div
          className='mt-8 space-y-6 text-lg leading-9'
          style={{ color: '#555' }}
        >
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className='mt-12 flex flex-wrap gap-3'>
          {article.tags.map(tag => (
            <span
              key={tag}
              className='rounded-full border px-4 py-2 text-sm font-medium'
              style={{
                borderColor: 'rgba(0,0,0,0.1)',
                color: 'var(--teal-primary)'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
