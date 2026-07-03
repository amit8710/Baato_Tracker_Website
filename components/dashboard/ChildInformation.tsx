import { HiAcademicCap } from 'react-icons/hi2'

export default function ChildInformation () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-6'>
      {/* Header */}
      <div className='mb-6 flex items-center gap-3'>
        <div
          className='flex h-12 w-12 items-center justify-center rounded-xl text-white'
          style={{ background: 'var(--teal-primary)' }}
        >
          <HiAcademicCap size={24} />
        </div>

        <div>
          <h2
            className='text-xl font-semibold'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Child Information
          </h2>

          <p className='text-sm' style={{ color: 'var(--text-light1)' }}>
            Information about your registered child.
          </p>
        </div>
      </div>

      {/* Information Table */}
      <div
        className='overflow-hidden rounded-2xl border border-slate-200'
        style={{ background: 'var(--background)' }}
      >
        <InfoRow label='Student Name' value='Aarav Basnet' />

        <InfoRow label='Class' value='Grade 5 • Section A' />

        <InfoRow label='Roll Number' value='15' />

        <InfoRow label='School' value='ABC Secondary School' />

        <InfoRow label='Assigned Bus' value='Bus 02' />

        <InfoRow label='Pickup Point' value='Baneshwor Chowk' />

        <InfoRow label='Pickup Time' value='7:20 AM' />

        <InfoRow label='Drop-off Point' value='Baneshwor Chowk' />

        <InfoRow label='Drop-off Time' value='4:30 PM' last />

        <InfoRow label='Guardian Contact' value='+977 98XXXXXXXX' last />
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
        className='w-40 text-sm font-medium'
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
