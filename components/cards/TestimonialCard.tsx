'use client'

import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

type TestimonialCardProps = {
  message: string
  name: string
  role: string
  image: string
}

export default function TestimonialCard ({
  message,
  name,
  role,
  image
}: TestimonialCardProps) {
  return (
    <div className='relative bg-white rounded-[30px] shadow-xl border overflow-visible px-8 py-8 mx-4'>
      {/* Quote */}
      <FaQuoteLeft
        className='text-5xl mb-6'
        style={{ color: 'var(--teal-light)' }}
      />
      {/* Message */}
      <p
        className='text-lg leading-9 min-h-[170px]'
        style={{
          color: 'var(--text-mainlight)'
        }}
      >
        {message}
      </p>
      {/* User */}
      <div className='flex items-center gap-4 mt-8'>
        <div
          className='relative w-16 h-16 rounded-full overflow-hidden border-4'
          style={{
            borderColor: 'var(--teal-light)'
          }}
        >
          <Image src={image} alt={name} fill className='object-cover' />
        </div>

        <div>
          <h4
            className='text-xl font-bold'
            style={{
              color: 'var(--teal-dark)'
            }}
          >
            {name}
          </h4>

          <p
            className='text-sm'
            style={{
              color: 'var(--teal-primary)'
            }}
          >
            {role}
          </p>
        </div>
      </div>
      <div
        className='absolute bottom-[-18px] left-24 w-10 h-10 rotate-45 bg-white border-r border-b'
        style={{
          borderColor: '#e5e7eb'
        }}
      />
    </div>
  )
}
