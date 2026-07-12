'use client'

import {
  HiExclamationTriangle,
  HiBuildingOffice2,
  HiTruck
} from 'react-icons/hi2'

interface SOSCardProps {
  onSOS?: () => void
}

export default function SOSCard ({ onSOS }: SOSCardProps) {
  return (
    <section
      className='rounded-3xl border border-red-200 p-8'
      style={{
        background:
          'linear-gradient(to bottom right, #FEF2F2, var(--background), #FEF2F2)'
      }}
    >
      <div className='flex flex-col items-center text-center'>
        {/* SOS Icon */}
        <div className='relative'>
          <div className='absolute inset-0 animate-ping rounded-full bg-red-400 opacity-30' />

          <div className='relative flex h-28 w-28 items-center justify-center rounded-full bg-red-600 text-white shadow-xl'>
            <HiExclamationTriangle size={56} />
          </div>
        </div>

        {/* Title */}
        <h2 className='heading-2 mt-8'>Emergency SOS</h2>

        {/* Description */}
        <p className='body-text mt-4 max-w-3xl'>
          If your child requires immediate assistance while travelling on the
          school bus, press the SOS button below. Once confirmed, your emergency
          request will be sent to the school transportation team.
        </p>

        {/* Notification Information */}
        <div
          className='mt-8 w-full max-w-4xl rounded-2xl border border-slate-200 p-6'
          style={{
            background: 'var(--background)'
          }}
        >
          <h3 className='heading-4 mb-5'>Your SOS alert will notify:</h3>

          <div className='grid gap-5 md:grid-cols-3'>
            {/* School Administration */}
            <div className='rounded-xl border border-slate-200 p-5'>
              <HiBuildingOffice2
                size={30}
                className='text-[var(--teal-primary)]'
              />

              <h4 className='heading-4 mt-4'>School Administration</h4>

              <p className='small-text mt-2'>
                Receives emergency alerts and coordinates support.
              </p>
            </div>

            {/* Transportation Office */}
            <div className='rounded-xl border border-slate-200 p-5'>
              <HiTruck size={30} className='text-[var(--teal-primary)]' />

              <h4 className='heading-4 mt-4'>Transportation Office</h4>

              <p className='small-text mt-2'>
                Monitors the bus situation and provides assistance.
              </p>
            </div>

            {/* Bus Driver */}
            <div className='rounded-xl border border-slate-200 p-5'>
              <HiExclamationTriangle
                size={30}
                className='text-[var(--teal-primary)]'
              />

              <h4 className='heading-4 mt-4'>Assigned Bus Driver</h4>

              <p className='small-text mt-2'>
                Receives the emergency notification for quick action.
              </p>
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className='mt-8 w-full max-w-3xl rounded-2xl border border-red-200 bg-red-50 p-5'>
          <div className='flex items-start gap-3'>
            <HiExclamationTriangle size={24} className='mt-1 text-red-600' />

            <div className='text-left'>
              <h3 className='heading-4 text-red-700'>Important Notice</h3>

              <p className='small-text mt-2 text-red-600'>
                Use the SOS feature only during genuine emergencies. False
                alerts may create unnecessary responses from the school
                transportation team.
              </p>
            </div>
          </div>
        </div>

        {/* SOS Button */}
        <button
          onClick={onSOS}
          className='button-text mt-10 rounded-2xl bg-red-600 px-12 py-5 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700 active:scale-95'
        >
          SEND EMERGENCY SOS
        </button>

        {/* Footer */}
        <p className='small-text mt-5'>
          Your child's latest bus location will be shared with the school after
          SOS confirmation.
        </p>
      </div>
    </section>
  )
}
