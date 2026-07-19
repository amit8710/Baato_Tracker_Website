import { HiCalendarDays } from 'react-icons/hi2'

interface TimelineItemProps {
  title: string
  subtitle: string
  active?: boolean
}

function TimelineItem ({ title, subtitle, active = false }: TimelineItemProps) {
  return (
    <div className='relative flex flex-col items-center text-center'>
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${
          active ? 'animate-pulse' : ''
        }`}
        style={{
          background: active ? 'var(--teal-primary)' : '#CBD5E1'
        }}
      >
        <HiCalendarDays size={22} />
      </div>

      <h4
        className='mt-4 font-semibold'
        style={{
          color: 'var(--text-mainlight)'
        }}
      >
        {title}
      </h4>

      <p
        className='mt-1 text-sm'
        style={{
          color: 'var(--text-light1)'
        }}
      >
        {subtitle}
      </p>
    </div>
  )
}

export default function JourneyTimeline () {
  const timelineItems = [
    {
      title: 'School',
      subtitle: 'Starting Point',
      active: false
    },
    {
      title: 'Pickup Point',
      subtitle: 'Completed',
      active: false
    },
    {
      title: 'Current Location',
      subtitle: 'Bus is Here',
      active: true
    },
    {
      title: 'Destination',
      subtitle: 'Home',
      active: false
    }
  ]

  return (
    <div className='border-t border-slate-200 p-6'>
      <h3
        className='mb-6 text-lg font-semibold'
        style={{
          color: 'var(--text-mainlight)'
        }}
      >
        Journey Timeline
      </h3>

      <div className='grid gap-6 md:grid-cols-4'>
        {timelineItems.map(item => (
          <TimelineItem
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            active={item.active}
          />
        ))}
      </div>
    </div>
  )
}
