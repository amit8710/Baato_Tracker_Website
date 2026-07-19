'use client'

import {
  HiBuildingOffice2,
  HiPhone,
  HiChatBubbleLeftRight,
  HiClock,
  HiInformationCircle
} from 'react-icons/hi2'

import { SchoolContactItem } from '@/data/SchoolContactData'

interface SchoolContactCardProps {
  contact: SchoolContactItem
}

export default function SchoolContactCard ({ contact }: SchoolContactCardProps) {
  const handleCall = () => {
    window.location.href = `tel:${contact.phone.replace(/\s/g, '')}`
  }

  const handleMessage = () => {
    window.location.href = `sms:${contact.phone.replace(/\s/g, '')}`
  }

  return (
    <div className='rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-primary hover:shadow-lg'>
      {/* Header */}
      <div className='flex items-start gap-4'>
        <div
          className='flex h-14 w-14 items-center justify-center rounded-2xl'
          style={{
            background: 'rgba(20,184,166,.12)',
            color: 'var(--teal-primary)'
          }}
        >
          <HiBuildingOffice2 size={28} />
        </div>

        <div className='flex-1'>
          <h3 className='heading-4'>{contact.department}</h3>

          <div className='small-text mt-2 flex items-center gap-2'>
            <HiClock size={16} className='text-teal-primary' />

            {contact.availability}
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className='mt-6 flex items-center gap-3'>
        <HiPhone size={18} className='text-teal-primary' />

        <span
          className='font-semibold'
          style={{
            color: 'var(--text-mainlight)'
          }}
        >
          {contact.phone}
        </span>
      </div>

      {/* Description */}
      <div className='mt-5 flex items-start gap-3'>
        <HiInformationCircle
          size={18}
          className='mt-1 shrink-0 text-teal-primary'
        />

        <p className='small-text'>{contact.description}</p>
      </div>

      {/* Action Buttons */}
      <div className='mt-6 grid grid-cols-2 gap-3 border-t border-slate-200 pt-5'>
        <button
          onClick={handleCall}
          className='button-text flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 transition hover:bg-slate-50'
          style={{
            color: 'var(--text-mainlight)'
          }}
        >
          <HiPhone size={18} />
          Call
        </button>

        <button
          onClick={handleMessage}
          className='button-text flex items-center justify-center gap-2 rounded-xl py-3 text-white transition hover:opacity-90'
          style={{
            background: 'var(--teal-primary)'
          }}
        >
          <HiChatBubbleLeftRight size={18} />
          Message
        </button>
      </div>
    </div>
  )
}
