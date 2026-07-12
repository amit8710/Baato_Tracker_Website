'use client'

import {
  HiMagnifyingGlass,
  HiPlus,
  HiMapPin,
  HiCircleStack
} from 'react-icons/hi2'

import GeofenceCard from './GeofenceCard'
import GeofenceMap from './GeofenceMap'
import { geofenceData } from '@/data/geofenceData'

const radiusOptions = [
  { value: 50, label: '50 m' },
  { value: 100, label: '100 m' },
  { value: 200, label: '200 m' },
  { value: 500, label: '500 m' },
  { value: 1000, label: '1 km' },
  { value: 2000, label: '2 km' },
  { value: 5000, label: '5 km' }
]

export default function GeofenceSection () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white'>
      {/* Header */}
      <div className='border-b border-slate-200 p-6'>
        <div className='flex items-center gap-4'>
          <div
            className='flex h-14 w-14 items-center justify-center rounded-2xl text-white'
            style={{ background: 'var(--teal-primary)' }}
          >
            <HiMapPin size={28} />
          </div>

          <div>
            <h2 className='heading-3'>Geofence Alerts</h2>

            <p className='small-text mt-1'>
              Create safe zones and receive notifications when the bus enters or
              leaves those areas.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className='grid gap-4 border-b border-slate-200 p-6 lg:grid-cols-4'>
        {/* Search */}
        <div className='relative'>
          <HiMagnifyingGlass
            size={20}
            className='absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-light1)]'
          />

          <input
            type='text'
            placeholder='Search location...'
            className='w-full rounded-xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-[var(--teal-primary)]'
          />
        </div>

        {/* Geofence Name */}
        <input
          type='text'
          placeholder='Geofence name'
          className='rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--teal-primary)]'
        />

        {/* Radius */}
        <select className='rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--teal-primary)]'>
          {radiusOptions.map(radius => (
            <option key={radius.value} value={radius.value}>
              {radius.label}
            </option>
          ))}
        </select>

        {/* Save Button */}
        <button
          className='button-text flex items-center justify-center gap-2 rounded-xl text-white transition hover:opacity-90'
          style={{
            background: 'var(--teal-primary)'
          }}
        >
          <HiPlus size={20} />
          Save Geofence
        </button>
      </div>

      {/* Map */}
      <div className='border-b border-slate-200'>
        <GeofenceMap />
      </div>

      {/* Saved Geofences */}
      <div className='p-6'>
        <div className='mb-5 flex items-center gap-3'>
          <HiCircleStack size={24} className='text-[var(--teal-primary)]' />

          <h3 className='heading-4'>Saved Geofences</h3>
        </div>

        <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {geofenceData.map(geofence => (
            <GeofenceCard key={geofence.id} geofence={geofence} />
          ))}
        </div>
      </div>
    </section>
  )
}
