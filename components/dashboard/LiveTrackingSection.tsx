import {
  HiMap,
  HiTruck,
  HiClock,
  HiMapPin,
  HiSignal,
  HiArrowPath,
  HiUser,
  HiCalendarDays
} from 'react-icons/hi2'

export default function LiveTrackingSection () {
  return (
    <section className='overflow-hidden rounded-3xl border border-slate-200 bg-white'>
      {/* Header */}
      <div className='flex flex-col gap-5 border-b border-slate-200 p-6 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex items-center gap-4'>
          <div
            className='flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-sm'
            style={{ background: 'var(--teal-primary)' }}
          >
            <HiMap size={28} />
          </div>

          <div>
            <h2 className='heading-3'>Live Bus Tracking</h2>

            <p className='small-text mt-1'>
              Track your child's school bus in real time.
            </p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2 rounded-full bg-green-100 px-4 py-2'>
            <span className='h-2.5 w-2.5 animate-pulse rounded-full bg-green-500' />
            <span className='text-sm font-semibold text-green-700'>Live</span>
          </div>

          <button
            className='flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 transition hover:bg-slate-50'
            style={{ color: 'var(--text-mainlight)' }}
          >
            <HiArrowPath size={18} />
            Refresh
          </button>
        </div>
      </div>

      {/* Map */}
      <div
        className='flex h-[500px] items-center justify-center border-b border-slate-200'
        style={{ background: 'var(--background)' }}
      >
        <div className='text-center'>
          <HiMap
            size={80}
            style={{ color: 'var(--teal-primary)' }}
            className='mx-auto'
          />

          <h3 className='heading-2 mt-6'>Baato Map</h3>

          {/* <p className='body-text mx-auto mt-3 max-w-2xl'>
            The interactive map will display the live GPS location of the school
            bus, pickup point, school, home location, travel route, and geofence
            alerts after integrating the Baato Maps API and GPS tracking
            service.
          </p> */}
        </div>
      </div>

      {/* Quick Stats */}
      <div className='grid gap-5 border-b border-slate-200 p-6 md:grid-cols-2 xl:grid-cols-4'>
        <StatCard
          icon={<HiTruck size={24} />}
          title='Current Status'
          value='On the Way'
        />

        <StatCard
          icon={<HiClock size={24} />}
          title='Estimated Arrival'
          value='7:18 AM'
        />

        <StatCard
          icon={<HiMapPin size={24} />}
          title='Distance Remaining'
          value='1.4 km'
        />

        <StatCard
          icon={<HiSignal size={24} />}
          title='GPS Status'
          value='Connected'
        />
      </div>

      {/* Information */}
      <div className='grid gap-6 p-6 lg:grid-cols-2'>
        <div
          className='overflow-hidden rounded-2xl border border-slate-200'
          style={{ background: 'var(--background)' }}
        >
          <SectionTitle title='Bus Information' />

          <InfoRow label='Bus Number' value='BA 2 KHA 1234' />
          <InfoRow label='Route' value='Koteshwor → Baneshwor → School' />
          <InfoRow label='Driver' value='Ram Bahadur Thapa' />
          <InfoRow label='Current Speed' value='32 km/h' last />
        </div>

        <div
          className='overflow-hidden rounded-2xl border border-slate-200'
          style={{ background: 'var(--background)' }}
        >
          <SectionTitle title='Current Tracking' />

          <InfoRow label='Current Address' value='Koteshwor, Kathmandu' />

          <InfoRow label='Next Stop' value='Baneshwor Chowk' />

          <InfoRow label='Last Updated' value='2 minutes ago' />

          <InfoRow label='Tracking Status' value='Tracking Active' last />
        </div>
      </div>

      {/* Timeline */}
      <div className='border-t border-slate-200 p-6'>
        <h3
          className='mb-6 text-lg font-semibold'
          style={{ color: 'var(--text-mainlight)' }}
        >
          Journey Timeline
        </h3>

        <div className='grid gap-6 md:grid-cols-4'>
          <TimelineItem
            title='School'
            subtitle='Starting Point'
            active={false}
          />

          <TimelineItem
            title='Pickup Point'
            subtitle='Completed'
            active={false}
          />

          <TimelineItem
            title='Current Location'
            subtitle='Bus is Here'
            active
          />

          <TimelineItem title='Destination' subtitle='Home' active={false} />
        </div>
      </div>
    </section>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  title: string
  value: string
}

function StatCard ({ icon, title, value }: StatCardProps) {
  return (
    <div className='rounded-2xl border border-slate-200 bg-white p-5'>
      <div
        className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-white'
        style={{ background: 'var(--teal-primary)' }}
      >
        {icon}
      </div>

      <p className='text-sm' style={{ color: 'var(--text-light1)' }}>
        {title}
      </p>

      <h4
        className='mt-2 text-lg font-semibold'
        style={{ color: 'var(--text-mainlight)' }}
      >
        {value}
      </h4>
    </div>
  )
}

function SectionTitle ({ title }: { title: string }) {
  return (
    <div className='border-b border-slate-200 px-6 py-4'>
      <h3 className='font-semibold' style={{ color: 'var(--text-mainlight)' }}>
        {title}
      </h3>
    </div>
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
        className='text-sm font-medium'
        style={{ color: 'var(--text-light1)' }}
      >
        {label}
      </p>

      <p
        className='text-right text-sm font-semibold'
        style={{ color: 'var(--text-mainlight)' }}
      >
        {value}
      </p>
    </div>
  )
}

interface TimelineItemProps {
  title: string
  subtitle: string
  active?: boolean
}

function TimelineItem ({ title, subtitle, active = false }: TimelineItemProps) {
  return (
    <div className='relative flex flex-col items-center text-center'>
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${
          active ? 'animate-pulse' : ''
        }`}
        style={{
          background: active ? 'var(--teal-primary)' : '#CBD5E1'
        }}
      >
        <HiCalendarDays size={22} />
      </div>

      <h4
        className='mt-4 font-semibold'
        style={{ color: 'var(--text-mainlight)' }}
      >
        {title}
      </h4>

      <p className='mt-1 text-sm' style={{ color: 'var(--text-light1)' }}>
        {subtitle}
      </p>
    </div>
  )
}
