'use client'

import { ReactNode } from 'react'

type FeatureCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard ({
  icon,
  title,
  description
}: FeatureCardProps) {
  return (
    <div
      className='group flex h-full w-full items-start gap-5 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2'
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--border-light)',
        boxShadow: '0 12px 30px rgba(15, 118, 110, 0.08)'
      }}
    >
      {/* Icon */}
      <div
        className='flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110'
        style={{
          backgroundColor: 'var(--teal-light)',
          color: 'var(--text-highlight)'
        }}
      >
        <div className='text-3xl'>{icon}</div>
      </div>

      {/* Content */}
      <div className='flex-1'>
        <h3
          className='mb-2 text-lg font-bold'
          style={{
            color: 'var(--teal-dark)'
          }}
        >
          {title}
        </h3>

        <p
          className='text-sm leading-7'
          style={{
            color: 'var(--text-mainlight)'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
