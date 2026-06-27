'use client'

import { useState } from 'react'

import PageHero from '@/components/common/PageHero'
import NewsTabsSection from '@/components/news/NewsTabsSection'
import NewsGrid from '@/components/news/NewsGrid'

export default function NewsUpdatesPage () {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  return (
    <>
      <PageHero
        companyName='Bato Tracker'
        pageTitle='News & Updates'
        backgroundImage='/heroimg.png'
      />

      <NewsTabsSection
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <NewsGrid selectedCategory={selectedCategory} />
    </>
  )
}
