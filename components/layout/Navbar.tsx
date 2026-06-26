'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import LoginButton from '../common/LoginButton'
import Button from '../common/Button'

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='w-full bg-teal-dark text-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-3'>
            <Image
              src='/logo.png'
              alt='Bato Tracker Logo'
              width={50}
              height={50}
              priority
              className='object-contain'
            />

            <span className='text-xl lg:text-2xl font-bold tracking-wide'>
              Bato Tracker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium'>
            <Link href='/' className='hover:text-teal-light transition'>
              Home
            </Link>

            <Link href='/getapp' className='hover:text-teal-light transition'>
              Get The App
            </Link>

            <Link
              href='/how-it-works'
              className='hover:text-teal-light transition'
            >
              How It Works
            </Link>

            <Link
              href='/news-updates'
              className='hover:text-teal-light transition'
            >
              News & Updates
            </Link>

            <Link href='/about' className='hover:text-teal-light transition'>
              About Us
            </Link>

            <Link href='/contact' className='hover:text-teal-light transition'>
              Contact
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className='hidden lg:flex items-center gap-3'>
            <LoginButton />
            <Button text='Request Demo' href='/contact' />
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='lg:hidden text-3xl font-bold'
            aria-label='Toggle Menu'
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {menuOpen && (
        <div className='lg:hidden bg-teal-dark border-t border-white/10'>
          <div className='px-6 py-6 flex flex-col gap-5 text-base font-medium'>
            <Link
              href='/'
              onClick={() => setMenuOpen(false)}
              className='hover:text-teal-light transition'
            >
              Home
            </Link>

            <Link
              href='/gettheapp'
              onClick={() => setMenuOpen(false)}
              className='hover:text-teal-light transition'
            >
              Get The App
            </Link>

            <Link
              href='/howitworks'
              onClick={() => setMenuOpen(false)}
              className='hover:text-teal-light transition'
            >
              How It Works
            </Link>

            <Link
              href='/news-updates'
              onClick={() => setMenuOpen(false)}
              className='hover:text-teal-light transition'
            >
              News & Updates
            </Link>

            <Link
              href='/about'
              onClick={() => setMenuOpen(false)}
              className='hover:text-teal-light transition'
            >
              About Us
            </Link>

            <Link
              href='/contact'
              onClick={() => setMenuOpen(false)}
              className='hover:text-teal-light transition'
            >
              Contact
            </Link>

            <div className='flex flex-col gap-3 pt-4'>
              <LoginButton />
              <Button text='Request Demo' href='/contact' />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
