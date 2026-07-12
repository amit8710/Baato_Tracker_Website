'use client'

import {
  HiTruck,
  HiUser,
  HiPhone,
  HiIdentification,
  HiMap,
  HiUsers,
  HiShieldCheck
} from 'react-icons/hi2'

export default function DriverInformation () {
  return (
    <section
      className='rounded-3xl p-6'
      style={{
        background: 'var(--text-highlight)',
        border: '1px solid var(--admin-border)',
        boxShadow: 'var(--admin-shadow)'
      }}
    >
      {/* Header */}

      <div className='mb-8 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div
            className='flex h-14 w-14 items-center justify-center rounded-2xl'
            style={{
              background: 'var(--teal-primary)',
              color: 'var(--text-highlight)'
            }}
          >
            <HiTruck size={28} />
          </div>

          <div>
            <h2 className='heading-4'>Driver & Bus Information</h2>

            <p className='small-text'>Today's assigned school transportation</p>
          </div>
        </div>

        <span
          className='rounded-full px-4 py-2 text-sm font-semibold'
          style={{
            background: 'rgba(22,163,74,.12)',
            color: 'var(--status-success)'
          }}
        >
          ● On Route
        </span>
      </div>

      {/* Driver */}

      <div
        className='mb-8 flex items-center gap-5 rounded-2xl p-5'
        style={{
          background: 'var(--background)',
          border: '1px solid var(--admin-border)'
        }}
      >
        <div
          className='flex h-20 w-20 items-center justify-center rounded-full'
          style={{
            background: 'var(--teal-primary)',
            color: 'var(--text-highlight)'
          }}
        >
          <HiUser size={42} />
        </div>

        <div>
          <h3 className='heading-4'>Ram Bahadur</h3>

          <p className='body-text'>School Bus Driver</p>
        </div>
      </div>

      {/* Information */}

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <InfoCard
          icon={<HiPhone size={22} />}
          label='Phone Number'
          value='+977 98XXXXXXXX'
        />

        <InfoCard
          icon={<HiTruck size={22} />}
          label='Bus Number'
          value='BA 2 KHA 1234'
        />

        <InfoCard
          icon={<HiIdentification size={22} />}
          label='Driver ID'
          value='DRV-2031'
        />

        <InfoCard
          icon={<HiMap size={22} />}
          label='Bus Route'
          value='Baneshwor → ABC School'
        />

        <InfoCard
          icon={<HiUsers size={22} />}
          label='Vehicle Capacity'
          value='40 Students'
        />

        <InfoCard
          icon={<HiTruck size={22} />}
          label='Vehicle Type'
          value='School Bus'
        />
      </div>
    </section>
  )
}

interface InfoCardProps {
  icon: React.ReactNode
  label: string
  value: string
}

function InfoCard ({ icon, label, value }: InfoCardProps) {
  return (
    <div
      className='flex items-center gap-4 rounded-2xl p-4'
      style={{
        background: 'var(--background)',
        border: '1px solid var(--admin-border)'
      }}
    >
      <div
        className='flex h-11 w-11 items-center justify-center rounded-xl'
        style={{
          background: 'rgba(13,148,136,.10)',
          color: 'var(--teal-primary)'
        }}
      >
        {icon}
      </div>

      <div>
        <p
          className='small-text'
          style={{
            opacity: 0.75
          }}
        >
          {label}
        </p>

        <p
          className='button-text'
          style={{
            color: 'var(--text-mainlight)'
          }}
        >
          {value}
        </p>
      </div>
    </div>
  )
}
