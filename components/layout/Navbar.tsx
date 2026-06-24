'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import RequestDemoButton from '../common/RequestDemoButton'
import LoginButton from '../common/LoginButton'

export default function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='w-full bg-teal-dark text-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-3'>
          <Image
            src='/logo.png'
            alt='Bato Tracker Logo'
            width={52}
            height={52}
            priority
            className='object-contain'
          />

          <div className='leading-tight'>
            <span className='text-2xl font-bold tracking-wide'>
              Bato Tracker
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-8 text-sm lg:text-base font-medium tracking-wide'>
          <Link href='/' className='hover:text-teal-light transition'>
            Home
          </Link>

          <Link href='#features' className='hover:text-teal-light transition'>
            Get The App
          </Link>

          <Link href='#howitworks' className='hover:text-teal-light transition'>
            How It Works
          </Link>

          <Link
            href='#news&updates'
            className='hover:text-teal-light transition'
          >
            News & Update
          </Link>

          <Link href='#about' className='hover:text-teal-light transition'>
            About Us
          </Link>

          <Link href='#contact' className='hover:text-teal-light transition'>
            Contact
          </Link>
        </nav>

        {/* CTA Buttons (Desktop) */}
        <div className='hidden md:flex items-center gap-3'>
          <LoginButton />
          <RequestDemoButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white text-2xl'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='max-w-7xl mx-auto px-6 py-5 flex items-center justify-between'>
          <Link href='/' className='block hover:text-teal-light'>
            Home
          </Link>

          <Link href='#features' className='block hover:text-teal-light'>
            Get The App
          </Link>

          <Link href='#howitworks' className='block hover:text-teal-light'>
            How It Works
          </Link>

          <Link href='#news&updates' className='block hover:text-teal-light'>
            News & Update
          </Link>

          <Link href='#about' className='block hover:text-teal-light'>
            About Us
          </Link>

          <Link href='#contact' className='block hover:text-teal-light'>
            Contact
          </Link>

          {/* CTA Buttons (Mobile) */}
          <div className='pt-3 flex flex-col gap-3'>
            <LoginButton />
            <RequestDemoButton />
          </div>
        </div>
      )}
    </header>
  )
}
