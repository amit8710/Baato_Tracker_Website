'use client'

import { IconType } from 'react-icons'

interface HighlightCardProps {
  title: string
  value: string
  subtitle: string
  icon: IconType
  color: string
}

export default function HighlightCard ({
  title,
  value,
  subtitle,
  icon: Icon,
  color
}: HighlightCardProps) {
  return (
    <div
      className='rounded-3xl p-6'
      style={{
        background: 'var(--text-highlight)',
        border: '1px solid var(--admin-border)',
        boxShadow: 'var(--admin-shadow)'
      }}
    >
      <div className='flex items-start justify-between'>
        <div>
          <p
            className='small-text'
            style={{
              color: 'var(--text-light1)',
              opacity: 0.75
            }}
          >
            {title}
          </p>

          <h3
            className='mt-3'
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: 'var(--text-mainlight)'
            }}
          >
            {value}
          </h3>

          <p className='small-text mt-2'>{subtitle}</p>
        </div>

        <div
          className='flex h-14 w-14 items-center justify-center rounded-2xl'
          style={{
            background: `${color}15`,
            color
          }}
        >
          <Icon size={28} />
        </div>
      </div>
    </div>
  )
}
