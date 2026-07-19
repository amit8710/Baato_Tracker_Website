'use client'

import { useState } from 'react'

import LiveTrackingHeader from './LiveTrackingHeader'
import LiveTrackingDetails from './LiveTrackingDetails'
import JourneyTimeline from './JourneyTimeline'

import { useRoutes } from '@/hooks/useRoutes'

export default function LiveTrackingSection () {
  const { routes, loading, refresh } = useRoutes()

  const [selectedRoute, setSelectedRoute] = useState('')

  if (loading) {
    return (
      <section
        className='
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-10
      text-center
      '
      >
        Loading routes...
      </section>
    )
  }

  return (
    <section
      className='
    overflow-hidden
    rounded-3xl
    border
    border-slate-200
    bg-white
    '
    >
      <LiveTrackingHeader
        routes={routes}
        selectedRoute={selectedRoute}
        setSelectedRoute={setSelectedRoute}
        onRefresh={refresh}
      />

      <LiveTrackingDetails />

      {/* routeId prop typed in JourneyTimeline may not be reflected in its declarations here; cast to any */}
      <JourneyTimeline {...({ routeId: selectedRoute } as any)} />
    </section>
  )
}
