import { HiPencilSquare } from 'react-icons/hi2'

export default function PersonalInformation () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-6'>
      {/* Header */}
      <div className='mb-6 flex items-center justify-between'>
        <div>
          <h2
            className='text-xl font-semibold'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Personal Information
          </h2>

          <p className='mt-1 text-sm' style={{ color: 'var(--text-light1)' }}>
            Review and manage your personal account information.
          </p>
        </div>

        <button
          className='flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition hover:opacity-90'
          style={{
            background: 'var(--teal-primary)',
            color: '#fff'
          }}
        >
          <HiPencilSquare size={18} />
          Edit Information
        </button>
      </div>

      {/* Information */}
      <div
        className='overflow-hidden rounded-2xl border border-slate-200'
        style={{ background: 'var(--background)' }}
      >
        <InfoRow label='Full Name' value='Amit Basnet' />

        <InfoRow label='Email Address' value='amit@email.com' />

        <InfoRow label='Phone Number' value='+977 98XXXXXXXX' />

        <InfoRow label='Address' value='Kathmandu, Nepal' />

        <InfoRow label='Parent ID' value='PAR-1001' />

        <InfoRow label='Registered Child' value='Aarav Basnet' last />
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
        className='w-48 text-sm font-medium'
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
