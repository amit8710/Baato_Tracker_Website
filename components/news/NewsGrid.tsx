'use client'

import NewsCard from '../cards/NewsCard'
import { newsData } from '@/data/newsData'

type Props = {
  selectedCategory: string
}

export default function NewsGrid ({ selectedCategory }: Props) {
  const filteredNews =
    selectedCategory === 'All'
      ? newsData
      : newsData.filter(item => item.category === selectedCategory)

  return (
    <section
      className='pt-2 pb-16 lg:pb-20'
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {filteredNews.length > 0 ? (
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10'>
            {filteredNews.map(item => (
              <NewsCard
                key={item.id}
                slug={item.slug}
                title={item.title}
                description={item.description}
                image={item.image}
                date={item.date}
                category={item.category}
              />
            ))}
          </div>
        ) : (
          <div
            className='flex min-h-[350px] flex-col items-center justify-center text-center'
            aria-live='polite'
          >
            <h3
              className='text-2xl font-bold'
              style={{
                color: 'var(--text-mainlight)'
              }}
            >
              No {selectedCategory} Found
            </h3>

            <p
              className='mt-3 max-w-md text-base leading-7'
              style={{
                color: '#6b7280'
              }}
            >
              There are currently no{' '}
              <span className='font-medium'>
                {selectedCategory.toLowerCase()}
              </span>{' '}
              available. Please check back later.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
