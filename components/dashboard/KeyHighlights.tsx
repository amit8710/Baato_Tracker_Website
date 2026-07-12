'use client'

import { HiUser, HiTruck, HiClock, HiCheckBadge } from 'react-icons/hi2'

import HighlightCard from '../cards/HighlightCard'
import { keyHighlightsData } from '@/data/keyHighlightsData'

const iconMap = {
  childStatus: HiUser,
  busStatus: HiTruck,
  estimatedArrival: HiClock,
  attendance: HiCheckBadge
}

export default function KeyHighlights () {
  return (
    <section>
      <div className='mb-6'>
        <h2 className='heading-3'>Key Highlights</h2>

        <p className='small-text'>Today's school transportation summary</p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
        {keyHighlightsData.map(item => {
          const Icon = iconMap[item.id as keyof typeof iconMap]

          return (
            <HighlightCard
              key={item.id}
              title={item.title}
              value={item.value}
              subtitle={item.subtitle}
              icon={Icon}
              color={item.color}
            />
          )
        })}
      </div>
    </section>
  )
}
