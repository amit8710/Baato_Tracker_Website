import { ReactNode } from 'react'

interface DashboardCardProps {
  title: string
  value: string | number
  subtitle: string
  icon: ReactNode
}

export default function DashboardCard ({
  title,
  value,
  subtitle,
  icon
}: DashboardCardProps) {
  return (
    <div className='rounded-2xl bg-white border border-slate-200 p-6'>
      <div className='flex items-center justify-between'>
        <div>
          <p
            className='text-sm font-medium'
            style={{ color: 'var(--teal-dark)' }}
          >
            {title}
          </p>

          <h2
            className='mt-3 text-3xl font-bold'
            style={{ color: 'var(--text-mainlight)' }}
          >
            {value}
          </h2>

          <p className='mt-2 text-sm' style={{ color: 'var(--teal-dark)' }}>
            {subtitle}
          </p>
        </div>

        <div
          className='flex h-16 w-16 items-center justify-center rounded-2xl'
          style={{
            background: 'var(--teal-primary)',
            color: '#fff'
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  )
}
