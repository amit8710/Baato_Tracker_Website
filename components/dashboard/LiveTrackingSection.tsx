import { HiMap } from 'react-icons/hi2'

export default function LiveTrackingSection () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white'>
      {/* Header */}
      <div className='border-b border-slate-200 p-6'>
        <div className='flex items-center gap-3'>
          <div
            className='flex h-12 w-12 items-center justify-center rounded-xl text-white'
            style={{ background: 'var(--teal-primary)' }}
          >
            <HiMap size={24} />
          </div>

          <div>
            <h2
              className='text-xl font-semibold'
              style={{ color: 'var(--text-mainlight)' }}
            >
              Live Bus Tracking
            </h2>

            <p className='text-sm' style={{ color: 'var(--text-light1)' }}>
              Track your child's school bus in real time.
            </p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div
        className='flex h-[450px] items-center justify-center border-b border-slate-200'
        style={{ background: 'var(--background)' }}
      >
        <div className='text-center'>
          <HiMap size={70} style={{ color: 'var(--teal-primary)' }} />

          <h3
            className='mt-5 text-2xl font-semibold'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Baato Map
          </h3>

          <p
            className='mx-auto mt-3 max-w-xl text-sm'
            style={{ color: 'var(--text-light1)' }}
          >
            The live location of the school bus, pickup point, route, and school
            location will be displayed here after integrating the Baato Maps API
            and GPS tracking service.
          </p>
        </div>
      </div>

      {/* Live Information */}
      <div className='p-6'>
        <div
          className='overflow-hidden rounded-2xl border border-slate-200'
          style={{ background: 'var(--background)' }}
        >
          <InfoRow label='Current Status' value='On the Way' />

          <InfoRow label='Current Location' value='Koteshwor, Kathmandu' />

          <InfoRow label='Next Stop' value='Baneshwor Chowk' />

          <InfoRow label='Distance Remaining' value='1.4 km' />

          <InfoRow label='Estimated Arrival' value='7:18 AM' />

          <InfoRow label='Current Speed' value='32 km/h' />

          <InfoRow label='Last Updated' value='2 minutes ago' last />
        </div>
      </div>
    </section>
  )
}

interface InfoRowProps {
  label: string
  value: string
  last?: boolean
}

function InfoRow ({ label, value, last = false }: InfoRowProps) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 ${
        !last ? 'border-b border-slate-200' : ''
      }`}
    >
      <p
        className='w-44 text-sm font-medium'
        style={{ color: 'var(--text-light1)' }}
      >
        {label}
      </p>

      <p
        className='flex-1 text-right text-sm font-semibold'
        style={{ color: 'var(--text-mainlight)' }}
      >
        {value}
      </p>
    </div>
  )
}
