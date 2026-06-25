import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Bato Tracker - Smart School Bus Tracking System',
  description:
    'Real-time school bus tracking system for student safety and live updates.'
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
        {/* 🌐 Navbar (global across all pages) */}
        <Navbar />

        {/* 📦 Page content wrapper */}
        <main className='flex-1 w-full'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
