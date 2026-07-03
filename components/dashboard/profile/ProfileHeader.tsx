import { HiUserCircle } from 'react-icons/hi2'

export default function ProfileHeader () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-6'>
      <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        {/* Left */}
        <div className='flex items-center gap-5'>
          <div
            className='flex h-20 w-20 items-center justify-center rounded-full'
            style={{ background: 'rgba(13,148,136,0.12)' }}
          >
            <HiUserCircle size={56} style={{ color: 'var(--teal-primary)' }} />
          </div>

          <div>
            <h1
              className='text-2xl font-bold'
              style={{ color: 'var(--text-mainlight)' }}
            >
              Amit Basnet
            </h1>

            <p className='mt-1 text-sm' style={{ color: 'var(--text-light1)' }}>
              Parent Account
            </p>

            <p className='mt-2 text-sm' style={{ color: 'var(--text-light1)' }}>
              Manage your profile information, password and notification
              preferences.
            </p>
          </div>
        </div>

        {/* Right */}
        <div
          className='rounded-full px-5 py-2 text-sm font-semibold'
          style={{
            background: 'rgba(13,148,136,0.12)',
            color: 'var(--teal-primary)'
          }}
        >
          Active Account
        </div>
      </div>
    </section>
  )
}
