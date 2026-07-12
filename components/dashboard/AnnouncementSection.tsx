'use client'

import { useState } from 'react'
import { HiMegaphone, HiMagnifyingGlass, HiFunnel } from 'react-icons/hi2'

import AnnouncementCard from './AnnouncementCard'
import AnnouncementModal from './AnnouncementModal'

import { announcementData, AnnouncementItem } from '@/data/announcementData'

export default function AnnouncementSection () {
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<AnnouncementItem | null>(null)

  return (
    <>
      <section className='rounded-3xl border border-slate-200 bg-white'>
        {/* Header */}
        <div className='border-b border-slate-200 p-6'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            {/* Title */}
            <div className='flex items-center gap-4'>
              <div
                className='flex h-14 w-14 items-center justify-center rounded-2xl text-white'
                style={{ background: 'var(--teal-primary)' }}
              >
                <HiMegaphone size={28} />
              </div>

              <div>
                <h2 className='heading-3'>Announcements</h2>

                <p className='small-text mt-1'>
                  Stay updated with school transportation announcements.
                </p>
              </div>
            </div>

            {/* Search & Filter */}
            <div className='flex flex-col gap-3 md:flex-row'>
              {/* Search */}
              <div className='relative'>
                <HiMagnifyingGlass
                  className='absolute left-4 top-1/2 -translate-y-1/2'
                  size={20}
                  style={{ color: 'var(--text-light1)' }}
                />

                <input
                  type='text'
                  placeholder='Search announcements...'
                  className='body-text w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition-all focus:border-[var(--teal-primary)] md:w-72'
                />
              </div>

              {/* Filter */}
              <button
                className='button-text flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 transition hover:bg-slate-50'
                style={{ color: 'var(--text-mainlight)' }}
              >
                <HiFunnel size={18} />
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Announcement List */}
        <div className='space-y-5 p-6'>
          {announcementData.length > 0 ? (
            announcementData.map(announcement => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
                onReadMore={setSelectedAnnouncement}
              />
            ))
          ) : (
            <div className='flex flex-col items-center justify-center py-20 text-center'>
              <HiMegaphone size={64} style={{ color: 'var(--text-light1)' }} />

              <h3 className='heading-3 mt-6'>No Announcements</h3>

              <p className='small-text mt-2'>
                There are no announcements available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Announcement Details Modal */}
      <AnnouncementModal
        announcement={selectedAnnouncement}
        onClose={() => setSelectedAnnouncement(null)}
      />
    </>
  )
}
