'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  HiBell,
  HiChevronDown,
  HiUserCircle,
  HiArrowRightOnRectangle,
  HiUser
} from 'react-icons/hi2'

export default function Header () {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  useEffect(() => {
    function handleClickOutside (event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = () => {
    // Later when backend is ready:
    // localStorage.removeItem('token')
    // localStorage.removeItem('user')
    // sessionStorage.clear()

    router.replace('/login')
  }

  return (
    <header className='flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8'>
      {/* Left */}
      <div>
        <h1
          className='text-3xl font-bold'
          style={{ color: 'var(--text-mainlight)' }}
        >
          Welcome Back 👋
        </h1>

        <p className='mt-1 text-sm' style={{ color: 'var(--text-light1)' }}>
          {today}
        </p>
      </div>

      {/* Right */}
      <div className='flex items-center gap-4'>
        {/* Notification */}
        <button className='relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-100'>
          <HiBell size={22} style={{ color: 'var(--teal-primary)' }} />

          <span
            className='absolute right-2 top-2 h-2.5 w-2.5 rounded-full'
            style={{ background: 'var(--teal-primary)' }}
          />
        </button>

        {/* Profile */}
        <div className='relative' ref={dropdownRef}>
          <button
            onClick={() => setOpen(!open)}
            className='flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-100'
          >
            <HiUserCircle size={40} style={{ color: 'var(--teal-primary)' }} />

            <div className='text-left'>
              <h3
                className='text-sm font-semibold'
                style={{ color: 'var(--text-mainlight)' }}
              >
                Amit Basnet
              </h3>

              <p className='text-xs' style={{ color: 'var(--text-light1)' }}>
                Parent Account
              </p>
            </div>

            <HiChevronDown size={18} style={{ color: 'var(--foreground)' }} />
          </button>

          {open && (
            <div className='absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg'>
              {/* User Info */}
              <div
                className='border-b border-slate-200 p-5'
                style={{ background: 'var(--background)' }}
              >
                <h3
                  className='font-semibold'
                  style={{ color: 'var(--text-mainlight)' }}
                >
                  Amit Basnet
                </h3>

                <p
                  className='mt-1 text-sm'
                  style={{ color: 'var(--text-light1)' }}
                >
                  amit@email.com
                </p>
              </div>

              {/* My Profile */}
              <Link
                href='/profile'
                onClick={() => setOpen(false)}
                className='flex items-center gap-3 px-5 py-4 transition hover:bg-slate-50'
              >
                <HiUser size={20} style={{ color: 'var(--teal-primary)' }} />

                <span style={{ color: 'var(--text-mainlight)' }}>
                  My Profile
                </span>
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className='flex w-full items-center gap-3 px-5 py-4 text-left transition hover:bg-slate-50'
              >
                <HiArrowRightOnRectangle
                  size={20}
                  style={{ color: 'var(--teal-primary)' }}
                />

                <span style={{ color: 'var(--text-mainlight)' }}>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
