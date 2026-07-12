'use client'

import {
  HiAcademicCap,
  HiUser,
  HiBuildingOffice2,
  HiTruck,
  HiMapPin,
  HiClock,
  HiPhone
} from 'react-icons/hi2'

export default function ChildInformation () {
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
            <HiAcademicCap size={28} />
          </div>

          <div>
            <h2 className='heading-4'>Child Information</h2>

            <p className='small-text'>Registered student details</p>
          </div>
        </div>

        <span
          className='rounded-full px-4 py-2 text-sm font-semibold'
          style={{
            background: 'rgba(22,163,74,.12)',
            color: 'var(--status-success)'
          }}
        >
          ● On Bus
        </span>
      </div>

      {/* Student */}

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
          <h3 className='heading-4'>Aarav Basnet</h3>

          <p className='body-text'>Grade 5 • Section A</p>
        </div>
      </div>

      {/* Information */}

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <InfoCard
          icon={<HiBuildingOffice2 size={22} />}
          label='School'
          value='ABC Secondary School'
        />

        <InfoCard
          icon={<HiTruck size={22} />}
          label='Bus Number'
          value='Bus 02'
        />

        <InfoCard
          icon={<HiMapPin size={22} />}
          label='Pickup Point'
          value='Baneshwor Chowk'
        />

        <InfoCard
          icon={<HiMapPin size={22} />}
          label='Drop Point'
          value='Baneshwor Chowk'
        />

        <InfoCard
          icon={<HiClock size={22} />}
          label='Pickup Time'
          value='07:20 AM'
        />

        <InfoCard
          icon={<HiClock size={22} />}
          label='Drop Time'
          value='04:30 PM'
        />

        <InfoCard
          icon={<HiPhone size={22} />}
          label='Guardian'
          value='+977 98XXXXXXXX'
        />

        <InfoCard
          icon={<HiAcademicCap size={22} />}
          label='Roll Number'
          value='15'
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
