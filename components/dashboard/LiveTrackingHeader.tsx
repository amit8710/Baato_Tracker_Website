'use client'

import { useState } from 'react'
import { HiArrowPath, HiMap } from 'react-icons/hi2'

import { useRoutes } from '@/hooks/useRoutes'
import type { Route } from '@/services/routes'

import RouteSelector from './RouteSelector'
import BaatoMap from '../common/BaatoMap'

export default function LiveTrackingHeader () {
  const { routes, loading, error, refresh } = useRoutes()

  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null)

  return (
    <>
      {/* Header */}
      <div className='flex flex-col gap-5 border-b border-slate-200 p-6 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex items-center gap-4'>
          <div
            className='flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-sm'
            style={{
              background: 'var(--teal-primary)'
            }}
          >
            <HiMap size={28} />
          </div>

          <div>
            <h2 className='heading-3'>Live Bus Tracking</h2>

            <p className='small-text mt-1'>
              Track your child's school bus in real time.
            </p>

            {!loading && (
              <p
                className='mt-2 text-sm'
                style={{
                  color: 'var(--text-light1)'
                }}
              >
                Available Routes: <strong>{routes.length}</strong>
              </p>
            )}
          </div>
        </div>

        <div className='flex items-center gap-3'>
          {/* Live Badge */}
          <div className='flex items-center gap-2 rounded-full bg-green-100 px-4 py-2'>
            <span className='h-2.5 w-2.5 animate-pulse rounded-full bg-green-500' />

            <span className='text-sm font-semibold text-green-700'>Live</span>
          </div>

          {/* Refresh */}
          <button
            onClick={refresh}
            disabled={loading}
            className='flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60'
            style={{
              color: 'var(--text-mainlight)'
            }}
          >
            <HiArrowPath size={18} className={loading ? 'animate-spin' : ''} />

            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className='border-b border-red-200 bg-red-50 px-6 py-3 text-sm text-red-600'>
          {error}
        </div>
      )}

      {/* Route Selector */}
      <RouteSelector
        routes={routes}
        loading={loading}
        selectedRoute={selectedRoute}
        onChange={setSelectedRoute}
      />

      {/* Selected Route */}
      {selectedRoute && (
        <div className='border-b border-slate-200 bg-slate-50 px-6 py-3'>
          <p
            className='text-sm font-medium'
            style={{
              color: 'var(--text-mainlight)'
            }}
          >
            Selected Route:
            <span className='ml-2 font-semibold text-teal-600'>
              {selectedRoute.name}
            </span>
          </p>
        </div>
      )}

      {/* Map */}
      <div className='relative h-[550px] overflow-hidden border-b border-slate-200'>
        <BaatoMap selectedRoute={selectedRoute} />

        {/* GPS Status */}
        <div className='absolute bottom-5 left-5 rounded-xl bg-white/90 px-5 py-3 shadow-lg backdrop-blur'>
          <p
            className='text-sm font-semibold'
            style={{
              color: 'var(--text-mainlight)'
            }}
          >
            GPS Status
          </p>

          <p
            className='mt-1 text-sm'
            style={{
              color: loading ? '#f59e0b' : error ? '#dc2626' : '#16a34a'
            }}
          >
            {loading
              ? 'Loading routes...'
              : error
              ? 'Failed to load routes'
              : 'Connected'}
          </p>

          {!loading && selectedRoute && (
            <p
              className='mt-1 text-xs'
              style={{
                color: 'var(--text-light1)'
              }}
            >
              Tracking: {selectedRoute.name}
            </p>
          )}
        </div>
      </div>
    </>
  )
}
