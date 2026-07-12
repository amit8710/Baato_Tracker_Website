'use client'

import { HiInformationCircle, HiCheckCircle } from 'react-icons/hi2'

const instructions = [
  'Stay calm and avoid panic during emergencies.',
  'Immediately inform the school administration.',
  'Use the SOS button only for genuine emergencies.',
  'Share your live location if requested by school staff.',
  'Keep your emergency contacts updated regularly.',
  'Call local emergency services if immediate assistance is required.'
]

export default function EmergencyInstruction () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white'>
      {/* Header */}
      <div className='border-b border-slate-200 p-6'>
        <div className='flex items-center gap-3'>
          <HiInformationCircle
            size={28}
            style={{ color: 'var(--teal-primary)' }}
          />

          <div>
            <h3 className='heading-3'>Emergency Safety Instructions</h3>

            <p className='small-text mt-1'>
              Follow these guidelines during an emergency.
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className='space-y-5 p-6'>
        {instructions.map((instruction, index) => (
          <div
            key={index}
            className='flex items-start gap-4 rounded-xl border border-slate-200 p-4 transition-all duration-300 hover:border-[var(--teal-primary)] hover:shadow-sm'
          >
            <div
              className='mt-1 flex h-8 w-8 items-center justify-center rounded-full'
              style={{
                background: 'rgba(20,184,166,.12)',
                color: 'var(--teal-primary)'
              }}
            >
              <HiCheckCircle size={18} />
            </div>

            <p className='body-text'>{instruction}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
