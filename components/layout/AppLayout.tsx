'use client'

import { usePathname } from 'next/navigation'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TawkChat from '@/components/common/TawkChat'

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout ({ children }: AppLayoutProps) {
  const pathname = usePathname()

  const isDashboard =
    pathname.startsWith('/dashboard') || pathname.startsWith('/profile')

  return (
    <>
      {!isDashboard && <Navbar />}

      <main className='flex-1 w-full'>{children}</main>

      {!isDashboard && <TawkChat />}

      {!isDashboard && <Footer />}
    </>
  )
}
