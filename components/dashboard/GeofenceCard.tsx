import { HiMapPin, HiPencilSquare, HiTrash, HiSignal } from 'react-icons/hi2'

import { GeofenceItem } from '@/data/geofenceData'

interface GeofenceCardProps {
  geofence: GeofenceItem
}

export default function GeofenceCard ({ geofence }: GeofenceCardProps) {
  return (
    <div className='rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-primary hover:shadow-lg'>
      {/* Header */}
      <div className='flex items-start justify-between'>
        <div>
          <div
            className='mb-3 flex h-12 w-12 items-center justify-center rounded-xl'
            style={{
              background: 'rgba(20,184,166,.12)',
              color: 'var(--teal-primary)'
            }}
          >
            <HiMapPin size={24} />
          </div>

          <h3 className='heading-4'>{geofence.name}</h3>

          <p className='small-text mt-2'>{geofence.location}</p>
        </div>

        <div
          className='rounded-full px-3 py-1 text-xs font-semibold'
          style={{
            background: '#ECFDF5',
            color: 'var(--status-success)'
          }}
        >
          Active
        </div>
      </div>

      {/* Details */}
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between'>
          <span className='small-text'>Radius</span>

          <span
            className='font-semibold'
            style={{ color: 'var(--text-mainlight)' }}
          >
            {geofence.radius >= 1000
              ? `${geofence.radius / 1000} km`
              : `${geofence.radius} m`}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='small-text'>Notification</span>

          <div
            className='flex items-center gap-2'
            style={{ color: 'var(--status-success)' }}
          >
            <HiSignal size={18} />

            <span className='button-text'>Enabled</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className='mt-6 flex gap-3 border-t border-slate-200 pt-5'>
        <button
          className='button-text flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 transition hover:bg-slate-50'
          style={{
            color: 'var(--text-mainlight)'
          }}
        >
          <HiPencilSquare size={18} />
          Edit
        </button>

        <button
          className='button-text flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 py-3 transition hover:bg-red-50'
          style={{
            color: 'var(--status-danger)'
          }}
        >
          <HiTrash size={18} />
          Delete
        </button>
      </div>
    </div>
  )
}
