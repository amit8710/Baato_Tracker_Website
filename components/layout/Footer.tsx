import Link from 'next/link'
import Image from 'next/image'
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa'

export default function Footer () {
  return (
    <footer
      className='w-full text-white'
      style={{ backgroundColor: 'var(--teal-dark)' }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8 py-16'>
        {/* TOP SECTION */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* BRAND */}
          <div className='space-y-3'>
            <div className='flex items-center gap-3'>
              <Image
                src='/logo.png'
                alt='Bato Tracker Logo'
                width={52}
                height={52}
                className='object-contain'
              />

              <h2 className='text-2xl font-bold tracking-wide'>Bato Tracker</h2>
            </div>

            <p
              className='text-base leading-relaxed max-w-sm'
              style={{ color: 'var(--text-light)' }}
            >
              Smart school bus tracking system for safety, reliability, and
              real-time updates.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>

            <ul
              className='space-y-3 text-sm'
              style={{ color: 'var(--text-light)' }}
            >
              <li>
                <Link
                  href='/'
                  className='hover:text-white transition duration-300'
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href='/gettheapp'
                  className='hover:text-white transition duration-300'
                >
                  Get The App
                </Link>
              </li>

              <li>
                <Link
                  href='/about'
                  className='hover:text-white transition duration-300'
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href='/contact'
                  className='hover:text-white transition duration-300'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT + FOLLOW */}
          <div className='space-y-6'>
            {/* CONTACT */}
            <div>
              <h3 className='text-lg font-semibold mb-3'>Contact</h3>

              <div
                className='space-y-4 text-sm'
                style={{ color: 'var(--text-light)' }}
              >
                <div className='flex items-center gap-2'>
                  <FaMapMarkerAlt />
                  <span>Kathmandu, Nepal</span>
                </div>

                <div className='flex items-center gap-2'>
                  <FaEnvelope />
                  <span>support@batotracker.com</span>
                </div>

                <div className='flex items-center gap-2'>
                  <FaPhone />
                  <span>+977-98XXXXXXXX</span>
                </div>
              </div>
            </div>

            {/* FOLLOW US */}
            <div>
              <h3 className='text-lg font-semibold mb-3'>Follow Us</h3>

              <div
                className='flex gap-5 text-2xl'
                style={{ color: 'var(--text-light)' }}
              >
                <Link href='#'>
                  <FaFacebook className='hover:text-white hover:scale-110 transition-all duration-300' />
                </Link>

                <Link href='#'>
                  <FaInstagram className='hover:text-white hover:scale-110 transition-all duration-300' />
                </Link>

                <Link href='#'>
                  <FaTwitter className='hover:text-white hover:scale-110 transition-all duration-300' />
                </Link>

                <Link href='#'>
                  <FaLinkedin className='hover:text-white hover:scale-110 transition-all duration-300' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className='my-10 border-t'
          style={{ borderColor: 'var(--border-light)' }}
        ></div>

        {/* BOTTOM SECTION */}
        <div
          className='flex flex-col md:flex-row items-center justify-between gap-4 text-sm'
          style={{ color: 'var(--text-muted)' }}
        >
          <p>© {new Date().getFullYear()} Bato Tracker. All rights reserved.</p>

          <div className='flex gap-4 mt-3 md:mt-0'>
            <Link href='#' className='hover:text-white transition'>
              Privacy Policy
            </Link>

            <Link href='#' className='hover:text-white transition'>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
