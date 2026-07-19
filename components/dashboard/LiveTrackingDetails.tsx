import { HiTruck, HiClock, HiMapPin, HiSignal } from 'react-icons/hi2'

export default function LiveTrackingDetails () {
  return (
    <>
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
        {/* Bus Information */}
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

        {/* Current Tracking */}
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
    </>
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

interface SectionTitleProps {
  title: string
}

function SectionTitle ({ title }: SectionTitleProps) {
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
