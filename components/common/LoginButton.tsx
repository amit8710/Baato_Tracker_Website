'use client'

import Link from 'next/link'

export default function LoginButton () {
  return (
    <Link
      href='/login'
      className='inline-flex items-center justify-center rounded-full border-2 border-teal-primary px-6 py-3 text-sm font-medium text-teal-primary shadow-lg transition-all duration-300 hover:bg-teal-primary hover:text-white'
    >
      Login
    </Link>
  )
}
