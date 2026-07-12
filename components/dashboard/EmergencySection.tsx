'use client'

import { HiShieldExclamation, HiBuildingOffice2 } from 'react-icons/hi2'

import SOSCard from './SOSCard'
import SchoolContactCard from './SchoolContactCard'
import EmergencyInstruction from './EmergencyInstruction'

import { schoolContactData } from '@/data/SchoolContactData'

export default function EmergencySection () {
  const handleSOS = () => {
    // Later replace this with:
    // POST /api/sos
    alert(
      'Emergency SOS will notify the school administration, transportation office, and assigned bus driver.'
    )
  }

  return (
    <section className='space-y-8'>
      {/* Header */}
      <div className='rounded-3xl border border-slate-200 bg-white p-6'>
        <div className='flex items-center gap-4'>
          <div
            className='flex h-14 w-14 items-center justify-center rounded-2xl text-white'
            style={{
              background: 'var(--teal-primary)'
            }}
          >
            <HiShieldExclamation size={28} />
          </div>

          <div>
            <h2 className='heading-3'>Emergency & SOS</h2>

            <p className='small-text mt-1'>
              Quickly contact the school transportation team or send an
              emergency SOS if immediate assistance is required.
            </p>
          </div>
        </div>
      </div>

      {/* SOS Section */}
      <SOSCard onSOS={handleSOS} />

      {/* School Emergency Contacts */}
      <section className='rounded-3xl border border-slate-200 bg-white'>
        <div className='border-b border-slate-200 p-6'>
          <div className='flex items-center gap-3'>
            <HiBuildingOffice2
              size={24}
              className='text-[var(--teal-primary)]'
            />

            <div>
              <h3 className='heading-4'>School Emergency Contacts</h3>

              <p className='small-text mt-1'>
                Contact the appropriate school department for immediate
                assistance regarding your child's transportation.
              </p>
            </div>
          </div>
        </div>

        <div className='grid gap-6 p-6 md:grid-cols-2 xl:grid-cols-2'>
          {schoolContactData.map(contact => (
            <SchoolContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </section>

      {/* Safety Instructions */}
      <EmergencyInstruction />
    </section>
  )
}
