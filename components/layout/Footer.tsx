import Link from 'next/link'
import Image from 'next/image'
import { navLinks } from '@/data/navigation'
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
      className='w-full pt-44 text-white lg:pt-48'
      style={{
        backgroundColor: 'var(--teal-dark)'
      }}
    >
      <div className='mx-auto max-w-7xl px-6 pb-16 lg:px-8'>
        {/* Top Section */}

        <div className='grid grid-cols-1 gap-12 md:grid-cols-3'>
          {/* Logo */}

          <div>
            <div className='mb-5 flex items-center gap-3'>
              <Image
                src='/logo1.png'
                alt='Baato Tracker'
                width={95}
                height={95}
              />

              <h2
                className='logo-text'
                style={{ color: 'var(--text-highlight)' }}
              >
                Baato Tracker
              </h2>
            </div>

            <p
              className='body-text max-w-sm leading-8'
              style={{ color: 'var(--text-light)' }}
            >
              Smart school bus tracking system designed to improve student
              safety with live GPS tracking, instant notifications, and reliable
              transportation management.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3
              className='heading-4 mb-5'
              style={{ color: 'var(--text-highlight)' }}
            >
              Quick Links
            </h3>

            <ul className='space-y-4'>
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className='nav-link nav-text'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}

          <div>
            <h3
              className='heading-4 mb-5'
              style={{ color: 'var(--text-highlight)' }}
            >
              Contact Us
            </h3>

            <div className='space-y-4' style={{ color: 'var(--text-light)' }}>
              <div className='flex items-center gap-3'>
                <FaMapMarkerAlt
                  className='text-lg'
                  style={{ color: 'var(--teal-light)' }}
                />

                <span
                  className='body-text'
                  style={{ color: 'var(--text-light)' }}
                >
                  Kathmandu, Nepal
                </span>
              </div>

              <div className='flex items-center gap-3'>
                <FaEnvelope
                  className='text-lg'
                  style={{ color: 'var(--teal-light)' }}
                />

                <span
                  className='body-text'
                  style={{ color: 'var(--text-light)' }}
                >
                  support@baatotracker.com
                </span>
              </div>

              <div className='flex items-center gap-3'>
                <FaPhone
                  className='text-lg'
                  style={{ color: 'var(--teal-light)' }}
                />

                <span
                  className='body-text'
                  style={{ color: 'var(--text-light)' }}
                >
                  +977-98XXXXXXXX
                </span>
              </div>
            </div>

            {/* Social Icons */}

            <div
              className='mt-8 flex gap-5 text-2xl'
              style={{ color: 'var(--text-light)' }}
            >
              <Link href='#'>
                <FaFacebook className='transition-all duration-300 hover:scale-110 hover:text-white' />
              </Link>

              <Link href='#'>
                <FaInstagram className='transition-all duration-300 hover:scale-110 hover:text-white' />
              </Link>

              <Link href='#'>
                <FaTwitter className='transition-all duration-300 hover:scale-110 hover:text-white' />
              </Link>

              <Link href='#'>
                <FaLinkedin className='transition-all duration-300 hover:scale-110 hover:text-white' />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div
          className='my-10 border-t'
          style={{
            borderColor: 'var(--border-light)'
          }}
        />

        {/* Bottom */}

        <div
          className='flex flex-col items-center justify-between gap-4 md:flex-row'
          style={{
            color: 'var(--text-muted)'
          }}
        >
          <p className='small-text' style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Baato Tracker. All rights reserved.
          </p>

          <div className='flex gap-6'>
            <Link
              href='#'
              className='small-text transition hover:text-white'
              style={{ color: 'var(--text-muted)' }}
            >
              Privacy Policy
            </Link>

            <Link
              href='#'
              className='small-text transition hover:text-white'
              style={{ color: 'var(--text-muted)' }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
