'use client'
import FeaturedNewsCard from '../cards/FeaturedNewsCard'
// import LatestNewsItem from '../news/LatestNewsItem'
import LatestNewsList from '../news/LatestNewsList'
import { newsData } from '@/data/newsData'

export default function NewsSection () {
  // Latest 5 posts
  const latestNews = newsData.slice(0, 5)

  const featured = latestNews[0]
  const latest = latestNews.slice(1)

  return (
    <section
      className='py-16 lg:py-20'
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Section Heading */}
        <div className='mb-12 text-center'>
          <span
            className='text-sm font-semibold uppercase tracking-[0.2em]'
            style={{
              color: 'var(--teal-primary)'
            }}
          >
            Latest Updates
          </span>

          <h2
            className='mt-3 text-3xl font-bold lg:text-5xl'
            style={{
              color: 'var(--text-mainlight)'
            }}
          >
            News & Updates
          </h2>

          {/* <p
            className='mx-auto mt-5 max-w-2xl text-base leading-8'
            style={{
              color: '#666'
            }}
          >
            Stay informed with the latest product updates, company news, feature
            releases and upcoming events from Bato Tracker.
          </p> */}
        </div>

        {/* Content */}
        <div className='grid gap-12 lg:grid-cols-[1.5fr_1fr]'>
          {/* Featured */}
          <FeaturedNewsCard
            slug={featured.slug}
            title={featured.title}
            description={featured.description}
            image={featured.image}
            date={featured.date}
            category={featured.category}
          />

          {/* Latest */}
          <LatestNewsList articles={latest} />
        </div>
      </div>
    </section>
  )
}
