'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LoginButton from '../common/LoginButton'
import Button from '../common/Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/website/getapp', label: 'Get The App' },
  { href: '/website/how-it-works', label: 'How It Works' },
  // { href: '/news-updates', label: 'News & Updates' },
  { href: '/website/about', label: 'About Us' },
  { href: '/website/contact', label: 'Contact' }
]

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='glass-navbar sticky top-0 z-50 w-full shadow-xl'>
      {/* Glass Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none' />

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-20 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-3'>
            <Image
              src='/logo.png'
              alt='Baato Tracker Logo'
              width={48}
              height={48}
              priority
            />

            <span
              className='text-xl lg:text-2xl font-bold tracking-wide'
              style={{ color: 'var(--text-highlight)' }}
            >
              Baato Tracker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-8 text-sm font-medium'>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className='nav-link'>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className='hidden lg:flex items-center gap-3'>
            <LoginButton />
            <Button text='Request Demo' href='/contact' />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-105'
            style={{
              borderColor: 'var(--border-light)',
              background: 'rgba(255,255,255,0.08)',
              color: 'var(--text-highlight)'
            }}
          >
            <span className='text-2xl'>{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <div
          className='mx-4 mb-4 rounded-2xl backdrop-blur-2xl shadow-2xl'
          style={{
            background: 'rgba(15,118,110,0.85)',
            border: '1px solid var(--border-light)'
          }}
        >
          <div className='flex flex-col px-6 py-6'>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className='nav-link py-3'
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div
              className='mt-5 flex flex-col gap-3 pt-5'
              style={{
                borderTop: '1px solid var(--border-light)'
              }}
            >
              <LoginButton />
              <Button text='Request Demo' href='/contact' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
