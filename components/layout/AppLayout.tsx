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

  // Hide Navbar, Footer and Chat on all admin pages
  const isAdminPage = pathname.startsWith('/admin')

  return (
    <>
      {!isAdminPage && <Navbar />}

      <main className='flex-1 w-full'>{children}</main>

      {!isAdminPage && <TawkChat />}

      {!isAdminPage && <Footer />}
    </>
  )
}
