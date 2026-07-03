import { HiBell } from 'react-icons/hi2'

const alerts = [
  {
    title: 'Bus Leaves School',
    description: 'Receive a notification when the bus starts its journey.',
    enabled: true
  },
  {
    title: 'Bus Near Pickup Point',
    description:
      'Get notified when the bus enters your selected geo-fence area.',
    enabled: true
  },
  {
    title: 'Child Boarded Bus',
    description: 'Receive confirmation once your child boards the bus.',
    enabled: true
  },
  {
    title: 'Child Dropped Safely',
    description:
      'Receive a notification after your child safely reaches school or home.',
    enabled: false
  }
]

export default function SmartAlertsSection () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white'>
      {/* Header */}
      <div className='border-b border-slate-200 p-6'>
        <div className='flex items-center gap-3'>
          <div
            className='flex h-12 w-12 items-center justify-center rounded-xl text-white'
            style={{ background: 'var(--teal-primary)' }}
          >
            <HiBell size={24} />
          </div>

          <div>
            <h2
              className='text-xl font-semibold'
              style={{ color: 'var(--text-mainlight)' }}
            >
              Smart Alerts
            </h2>

            <p className='text-sm' style={{ color: 'var(--text-light1)' }}>
              Choose which notifications you would like to receive.
            </p>
          </div>
        </div>
      </div>

      {/* Alert List */}
      <div
        className='overflow-hidden rounded-b-3xl'
        style={{ background: 'var(--background)' }}
      >
        {alerts.map((alert, index) => (
          <div
            key={alert.title}
            className={`flex items-center justify-between px-6 py-5 ${
              index !== alerts.length - 1 ? 'border-b border-slate-200' : ''
            }`}
          >
            <div className='max-w-xl'>
              <h3
                className='font-semibold'
                style={{ color: 'var(--text-mainlight)' }}
              >
                {alert.title}
              </h3>

              <p
                className='mt-1 text-sm'
                style={{ color: 'var(--text-light1)' }}
              >
                {alert.description}
              </p>
            </div>

            <span
              className='rounded-full px-4 py-2 text-sm font-medium'
              style={{
                background: alert.enabled ? 'rgba(13,148,136,0.12)' : '#f1f5f9',
                color: alert.enabled
                  ? 'var(--teal-primary)'
                  : 'var(--text-light1)'
              }}
            >
              {alert.enabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
