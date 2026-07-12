import {
  HiArrowRight,
  HiCalendarDays,
  HiUser,
  HiExclamationTriangle
} from 'react-icons/hi2'

import { AnnouncementItem } from '@/data/announcementData'

interface AnnouncementCardProps {
  announcement: AnnouncementItem
  onReadMore: (announcement: AnnouncementItem) => void
}

export default function AnnouncementCard ({
  announcement,
  onReadMore
}: AnnouncementCardProps) {
  const priorityColor = {
    High: {
      bg: '#FEF2F2',
      color: '#DC2626',
      iconBg: '#FEE2E2',
      iconColor: '#DC2626'
    },
    Medium: {
      bg: '#FEFCE8',
      color: '#CA8A04',
      iconBg: '#FEF9C3',
      iconColor: '#CA8A04'
    },
    Low: {
      bg: '#F0FDF4',
      color: '#16A34A',
      iconBg: '#DCFCE7',
      iconColor: '#16A34A'
    }
  }

  const colors = priorityColor[announcement.priority]

  return (
    <div className='rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--teal-primary)] hover:shadow-lg'>
      {/* Header */}
      <div className='flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between'>
        <div className='flex-1'>
          <div className='mb-4 flex flex-wrap items-center gap-3'>
            <span
              className='rounded-full px-3 py-1 text-xs font-semibold'
              style={{
                background: colors.bg,
                color: colors.color
              }}
            >
              {announcement.priority} Priority
            </span>

            <span
              className='label-text rounded-full px-3 py-1'
              style={{
                background: 'var(--background)'
              }}
            >
              {announcement.category}
            </span>
          </div>

          <h3 className='heading-3'>{announcement.title}</h3>

          <p className='body-text mt-3 line-clamp-3'>
            {announcement.description}
          </p>
        </div>

        <div
          className='flex h-14 w-14 items-center justify-center rounded-2xl'
          style={{
            background: colors.iconBg,
            color: colors.iconColor
          }}
        >
          <HiExclamationTriangle size={28} />
        </div>
      </div>

      {/* Footer */}
      <div className='mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 md:flex-row md:items-center md:justify-between'>
        <div className='flex flex-wrap items-center gap-6'>
          <div className='flex items-center gap-2'>
            <HiUser size={18} style={{ color: 'var(--text-light1)' }} />

            <span className='small-text'>{announcement.postedBy}</span>
          </div>

          <div className='flex items-center gap-2'>
            <HiCalendarDays size={18} style={{ color: 'var(--text-light1)' }} />

            <span className='small-text'>{announcement.date}</span>
          </div>
        </div>

        <button
          onClick={() => onReadMore(announcement)}
          className='button-text flex items-center gap-2 transition-all duration-200 hover:gap-3'
          style={{ color: 'var(--teal-primary)' }}
        >
          Read more
          <HiArrowRight size={18} />
        </button>
      </div>
    </div>
  )
}
