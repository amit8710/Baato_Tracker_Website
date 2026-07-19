import { HiClock, HiMapPin, HiTruck, HiFlag } from 'react-icons/hi2'

const tripDetails = [
  {
    title: 'Current Status',
    value: 'On the Way',
    description: 'The bus is currently heading towards your pickup location.',
    icon: HiTruck
  },
  {
    title: 'Estimated Arrival',
    value: '7:18 AM',
    description: 'Expected arrival at your pickup point.',
    icon: HiClock
  },
  {
    title: 'Next Stop',
    value: 'Baneshwor Chowk',
    description: 'Next scheduled pickup location.',
    icon: HiMapPin
  },
  {
    title: 'Pickup Time',
    value: '7:20 AM',
    description: 'Scheduled pickup time for today.',
    icon: HiFlag
  }
]

export default function TodayTripSection () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-6'>
      {/* Header */}
      <div className='mb-6'>
        <h2
          className='text-xl font-semibold'
          style={{ color: 'var(--text-mainlight)' }}
        >
          Today's Trip
        </h2>

        <p className='mt-1 text-sm' style={{ color: 'var(--text-light1)' }}>
          Live information about today's school bus journey.
        </p>
      </div>

      {/* Trip Cards */}
      <div className='space-y-4'>
        {tripDetails.map(item => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className='flex items-start gap-4 rounded-2xl border border-slate-200 bg-background p-4 transition hover:border-teal-primary'
            >
              {/* Icon */}
              <div
                className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full'
                style={{
                  background: 'rgba(13,148,136,0.12)',
                  color: 'var(--teal-primary)'
                }}
              >
                <Icon size={20} />
              </div>

              {/* Content */}
              <div className='flex-1'>
                <div className='flex items-center justify-between'>
                  <h3
                    className='font-semibold'
                    style={{ color: 'var(--text-mainlight)' }}
                  >
                    {item.title}
                  </h3>

                  <span
                    className='text-sm font-semibold'
                    style={{ color: 'var(--teal-primary)' }}
                  >
                    {item.value}
                  </span>
                </div>

                <p
                  className='mt-1 text-sm'
                  style={{ color: 'var(--text-light1)' }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
