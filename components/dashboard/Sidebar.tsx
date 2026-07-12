'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  MdDashboard,
  MdDirectionsBus,
  MdPeople,
  MdLocationOn,
  MdCampaign,
  MdOutlineNotificationsActive,
  MdEmergency,
  MdAnalytics,
  MdPerson,
  MdSettings,
  MdLogout
} from 'react-icons/md'

const menuItems = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: MdDashboard
  },
  {
    title: 'Live Tracking',
    href: '/admin/live-tracking',
    icon: MdLocationOn
  },

  {
    title: 'Announcements',
    href: '/admin/announcement',
    icon: MdCampaign
  },
  {
    title: 'Geofence & Alerts',
    href: '/admin/geofence',
    icon: MdOutlineNotificationsActive
  },
  {
    title: 'Emergency SOS',
    href: '/admin/emergency',
    icon: MdEmergency
  }
]

export default function Sidebar () {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    // Remove stored authentication data
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')

    // Redirect to login page
    router.push('/admin/login')
  }

  return (
    <aside
      className='fixed left-0 top-0 z-40 flex h-screen w-72 flex-col'
      style={{
        background: 'var(--admin-sidebar-bg)',
        borderRight: '1px solid var(--admin-border)',
        boxShadow: 'var(--admin-shadow)'
      }}
    >
      {/* Logo */}

      <div
        className='px-6 py-6'
        style={{
          borderBottom: '1px solid var(--admin-border)'
        }}
      >
        <div className='flex items-center gap-4'>
          <Image
            src='/logo1.png'
            alt='Baato Tracker'
            width={52}
            height={52}
            priority
          />

          <div>
            <h2
              className='heading-4'
              style={{
                color: 'var(--teal-primary)'
              }}
            >
              Baato Tracker
            </h2>

            <p className='small-text'>School Bus System</p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav className='flex-1 overflow-y-auto px-4 py-6'>
        <p
          className='small-text mb-4 px-3'
          style={{
            color: 'var(--text-light1)',
            opacity: 0.6,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}
        >
          Main Menu
        </p>

        <div className='space-y-2'>
          {menuItems.map(item => {
            const Icon = item.icon

            const active = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className='flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300'
                style={
                  active
                    ? {
                        background: 'var(--teal-primary)',
                        color: 'var(--text-highlight)',
                        boxShadow: '0 8px 20px rgba(13,148,136,.18)'
                      }
                    : {
                        color: 'var(--text-mainlight)'
                      }
                }
              >
                <Icon size={22} />

                <span className='button-text'>{item.title}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Bottom */}

      <div
        className='p-4'
        style={{
          borderTop: '1px solid var(--admin-border)'
        }}
      >
        <Link
          href='/admin/profile'
          className='mb-2 flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300'
          style={{
            color: 'var(--text-mainlight)'
          }}
        >
          <MdPerson size={22} />

          <span className='button-text'>Profile</span>
        </Link>

        <button
          onClick={handleLogout}
          className='mt-2 flex w-full items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300'
          style={{
            color: 'var(--status-danger)'
          }}
        >
          <MdLogout size={22} />

          <span className='button-text'>Logout</span>
        </button>
      </div>
    </aside>
  )
}
