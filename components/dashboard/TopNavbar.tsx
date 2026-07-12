'use client'

import { useEffect, useState } from 'react'
import { MdSearch } from 'react-icons/md'

export default function TopNavbar () {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      setCurrentTime(
        now.toLocaleString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      )
    }

    updateTime()

    const timer = setInterval(updateTime, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <header
      className='fixed top-0 right-0 z-30 flex h-20 items-center justify-between px-8'
      style={{
        left: '288px',
        background: 'var(--text-highlight)',
        borderBottom: '1px solid var(--admin-border)',
        boxShadow: 'var(--admin-shadow)'
      }}
    >
      {/* Left */}

      <div className='flex flex-col justify-center'>
        <h1 className='heading-3'>Dashboard</h1>

        <p
          className='small-text'
          style={{
            color: 'var(--text-light1)',
            opacity: 0.75
          }}
        >
          {currentTime}
        </p>
      </div>

      {/* Right */}

      <div className='relative hidden md:block'>
        <MdSearch
          size={20}
          className='absolute left-4 top-1/2 -translate-y-1/2'
          style={{
            color: 'var(--text-light1)',
            opacity: 0.5
          }}
        />

        <input
          type='text'
          placeholder='Search...'
          className='w-80 rounded-xl py-3 pl-12 pr-4 outline-none transition-all duration-300'
          style={{
            background: 'var(--background)',
            border: '1px solid var(--admin-border)',
            color: 'var(--text-mainlight)'
          }}
          onFocus={e => {
            e.currentTarget.style.border = '1px solid var(--teal-primary)'
          }}
          onBlur={e => {
            e.currentTarget.style.border = '1px solid var(--admin-border)'
          }}
        />
      </div>
    </header>
  )
}
