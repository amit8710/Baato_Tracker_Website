import { HiShieldCheck, HiTruck } from 'react-icons/hi2'

export default function DriverInformation () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-6'>
      {/* Header */}
      <div className='mb-6 flex items-center gap-3'>
        <div
          className='flex h-12 w-12 items-center justify-center rounded-xl text-white'
          style={{ background: 'var(--teal-primary)' }}
        >
          <HiTruck size={24} />
        </div>

        <div>
          <h2
            className='text-xl font-semibold'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Driver & Bus Information
          </h2>

          <p className='text-sm' style={{ color: 'var(--text-light1)' }}>
            Contact information for today's assigned school bus.
          </p>
        </div>
      </div>

      {/* Driver Information */}
      <div
        className='overflow-hidden rounded-2xl border border-slate-200'
        style={{ background: 'var(--background)' }}
      >
        <InfoRow label='Driver Name' value='Ram Bahadur' />

        <InfoRow label='Phone Number' value='+977 98XXXXXXXX' />

        <InfoRow label='Bus Number' value='BA 2 KHA 1234' />

        <InfoRow label='Driver ID' value='DRV-2031' />

        <InfoRow label='Bus Route' value='Baneshwor → ABC School' />

        <InfoRow label='Vehicle Capacity' value='40 Students' last />
      </div>

      {/* Emergency Contact */}
      <div
        className='mt-6 rounded-2xl border border-slate-200 p-5'
        style={{ background: 'var(--background)' }}
      >
        <div className='flex items-start gap-4'>
          <HiShieldCheck size={26} style={{ color: 'var(--teal-primary)' }} />

          <div>
            <h3
              className='font-semibold'
              style={{ color: 'var(--text-mainlight)' }}
            >
              Emergency Contact
            </h3>

            <p className='mt-1 text-sm' style={{ color: 'var(--text-light1)' }}>
              School Transport Office
            </p>

            <p
              className='mt-2 text-lg font-semibold'
              style={{ color: 'var(--teal-primary)' }}
            >
              +977 01-XXXXXXX
            </p>
          </div>
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
