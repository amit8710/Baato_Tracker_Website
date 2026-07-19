'use client'

import BaatoMap from '../common/BaatoMap'

import { HiMapPin, HiBellAlert, HiCursorArrowRays } from 'react-icons/hi2'

export default function GeofenceMap () {
  return (
    <div className='relative h-[550px] overflow-hidden rounded-3xl'>
      {/* Baato Map */}
      <BaatoMap />

      {/* Overlay */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent' />

      {/* Feature Cards */}
      <div className='pointer-events-none absolute bottom-8 left-1/2 z-20 w-full max-w-5xl -translate-x-1/2 px-6'>
        <div className='grid gap-5 md:grid-cols-3'>
          <Feature
            icon={<HiCursorArrowRays size={26} />}
            title='Select Location'
            description='Click anywhere on the map to place a geofence.'
          />

          <Feature
            icon={<HiMapPin size={26} />}
            title='Choose Radius'
            description='Create alerts from 50 meters up to 5 kilometers.'
          />

          <Feature
            icon={<HiBellAlert size={26} />}
            title='Receive Alerts'
            description='Get notified when the school bus enters the area.'
          />
        </div>
      </div>
    </div>
  )
}

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Feature ({ icon, title, description }: FeatureProps) {
  return (
    <div className='pointer-events-auto rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-md transition hover:shadow-2xl'>
      <div
        className='mx-auto flex h-12 w-12 items-center justify-center rounded-xl'
        style={{
          background: 'rgba(20,184,166,.12)',
          color: 'var(--teal-primary)'
        }}
      >
        {icon}
      </div>

      <h4 className='heading-4 mt-4 text-center'>{title}</h4>

      <p className='small-text mt-2 text-center'>{description}</p>
    </div>
  )
}
