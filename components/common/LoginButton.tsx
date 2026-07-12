'use client'

import Link from 'next/link'

export default function LoginButton () {
  return (
    <Link
      href='/admin/login'
      className='button-text inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-teal-primary shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg'
    >
      Login
    </Link>
  )
}
