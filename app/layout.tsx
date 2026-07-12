import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import AppNavbar from '@/components/layout/AppLayout'
import { AuthProvider } from '@/context/AuthContext'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Baato Tracker - Smart School Bus Tracking System',
  description:
    'Real-time school bus tracking system for student safety and live updates.',
  icons: {
    icon: '/logo1.png',
    shortcut: '/logo1.png',
    apple: '/logo1.png'
  }
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-background text-foreground'>
        <AuthProvider>
          <AppNavbar>{children}</AppNavbar>
        </AuthProvider>
      </body>
    </html>
  )
}
