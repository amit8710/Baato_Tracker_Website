'use client'

import { ReactNode } from 'react'

type FeatureCardProps = {
  icon: ReactNode
  title: string
  description?: string
  className?: string
}

export default function FeatureCard ({
  icon,
  title,
  description,
  className = ''
}: FeatureCardProps) {
  return (
    <div
      className={`group flex items-center gap-4 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 ${className}`}
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--border-light)',
        boxShadow: '0 12px 30px rgba(15,118,110,.08)'
      }}
    >
      {/* Icon */}
      <div
        className='flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110'
        style={{
          backgroundColor: 'var(--teal-light)',
          color: 'var(--text-highlight)'
        }}
      >
        <div className='text-2xl'>{icon}</div>
      </div>

      {/* Title */}
      <div className='flex-1'>
        <h3
          className='text-lg font-bold'
          style={{
            color: 'var(--teal-dark)'
          }}
        >
          {title}
        </h3>

        {description && (
          <p
            className='mt-2 text-sm leading-6'
            style={{
              color: 'var(--text-mainlight)'
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
