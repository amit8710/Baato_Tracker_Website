import LiveTrackingSection from '@/components/dashboard/LiveTrackingSection'

export default function LiveTrackingPage () {
  return (
    <main className='space-y-6'>
      {/* Page Header */}
      <div>
        <h1
          className='text-3xl font-bold'
          style={{ color: 'var(--text-mainlight)' }}
        >
          Live Tracking
        </h1>

        <p className='mt-2 text-sm' style={{ color: 'var(--text-light1)' }}>
          Monitor your child's school bus location in real time.
        </p>
      </div>

      {/* Live Tracking Component */}
      <LiveTrackingSection />
    </main>
  )
}
