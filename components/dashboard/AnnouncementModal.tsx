'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { HiXMark, HiCalendarDays, HiUser } from 'react-icons/hi2'

import { AnnouncementItem } from '@/data/announcementData'

interface Props {
  announcement: AnnouncementItem | null
  onClose: () => void
}

export default function AnnouncementModal ({ announcement, onClose }: Props) {
  if (!announcement) return null

  const colors = {
    High: {
      bg: '#FEF2F2',
      text: '#DC2626'
    },
    Medium: {
      bg: '#FEFCE8',
      text: '#CA8A04'
    },
    Low: {
      bg: '#F0FDF4',
      text: '#16A34A'
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          onClick={e => e.stopPropagation()}
          className='max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl bg-white shadow-2xl'
        >
          {/* Header */}
          <div className='flex items-center justify-between border-b border-slate-200 p-6'>
            <div>
              <span
                className='rounded-full px-3 py-1 text-xs font-semibold'
                style={{
                  background: colors[announcement.priority].bg,
                  color: colors[announcement.priority].text
                }}
              >
                {announcement.priority} Priority
              </span>

              <h2 className='heading-2 mt-4'>{announcement.title}</h2>
            </div>

            <button
              onClick={onClose}
              className='rounded-xl p-2 transition hover:bg-slate-100'
              style={{ color: 'var(--text-mainlight)' }}
            >
              <HiXMark size={28} />
            </button>
          </div>

          {/* Body */}
          <div className='space-y-6 p-6'>
            <div className='flex flex-wrap gap-3'>
              <span
                className='label-text rounded-full px-3 py-1'
                style={{
                  background: 'var(--background)'
                }}
              >
                {announcement.category}
              </span>
            </div>

            <p className='body-text'>{announcement.description}</p>

            {/* Meta Information */}
            <div className='grid gap-4 border-t border-slate-200 pt-6 md:grid-cols-2'>
              <div className='flex items-center gap-3'>
                <HiUser size={20} style={{ color: 'var(--teal-primary)' }} />

                <div>
                  <p className='small-text'>Posted By</p>

                  <p className='label-text'>{announcement.postedBy}</p>
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <HiCalendarDays
                  size={20}
                  style={{ color: 'var(--teal-primary)' }}
                />

                <div>
                  <p className='small-text'>Published</p>

                  <p className='label-text'>{announcement.date}</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className='flex justify-end border-t border-slate-200 pt-6'>
              <button
                onClick={onClose}
                className='button-text rounded-xl px-6 py-3 text-white transition hover:opacity-90'
                style={{ background: 'var(--teal-primary)' }}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
