import {
  HiMap,
  HiMapPin,
  HiBellAlert,
  HiCursorArrowRays
} from 'react-icons/hi2'

export default function GeofenceMap () {
  return (
    <div
      className='relative flex h-[550px] items-center justify-center overflow-hidden'
      style={{ background: 'var(--background)' }}
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='h-full w-full'
          style={{
            backgroundImage: `
              linear-gradient(to right, #94a3b8 1px, transparent 1px),
              linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10 max-w-2xl px-8 text-center'>
        <div
          className='mx-auto flex h-24 w-24 items-center justify-center rounded-full'
          style={{
            background: 'rgba(20,184,166,.12)',
            color: 'var(--teal-primary)'
          }}
        >
          <HiMap size={56} />
        </div>

        <h3 className='heading-2 mt-6'>Interactive Geofence Map</h3>

        <p className='body-text mx-auto mt-4 max-w-2xl'>
          The Baato Map will appear here after API integration. Parents will be
          able to search for a location or click directly on the map to create
          geofences for bus arrival notifications.
        </p>

        {/* Features */}
        <div className='mt-10 grid gap-5 md:grid-cols-3'>
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
    <div className='rounded-2xl border border-slate-200 bg-white p-5 transition hover:shadow-md'>
      <div
        className='mx-auto flex h-12 w-12 items-center justify-center rounded-xl'
        style={{
          background: 'rgba(20,184,166,.12)',
          color: 'var(--teal-primary)'
        }}
      >
        {icon}
      </div>

      <h4 className='heading-4 mt-4'>{title}</h4>

      <p className='small-text mt-2'>{description}</p>
    </div>
  )
}
