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
      className='w-full text-white pt-44 lg:pt-48'
      style={{
        backgroundColor: 'var(--teal-dark)'
      }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8 pb-16'>
        {/* Top Section */}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Logo */}

          <div>
            <div className='flex items-center gap-3 mb-5'>
              <Image
                src='/logo.png'
                alt='Bato Tracker'
                width={55}
                height={55}
              />

              <h2 className='text-2xl font-bold'>Bato Tracker</h2>
            </div>

            <p
              className='leading-7 max-w-sm'
              style={{
                color: 'var(--text-light)'
              }}
            >
              Smart school bus tracking system designed to improve student
              safety with live GPS tracking, instant notifications and reliable
              transportation management.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className='text-xl font-semibold mb-5'>Quick Links</h3>

            <ul
              className='space-y-4'
              style={{
                color: 'var(--text-light)'
              }}
            >
              <li>
                <Link href='/' className='hover:text-white transition'>
                  Home
                </Link>
              </li>

              <li>
                <Link href='/about' className='hover:text-white transition'>
                  About Us
                </Link>
              </li>

              <li>
                <Link href='/gettheapp' className='hover:text-white transition'>
                  Get The App
                </Link>
              </li>

              <li>
                <Link href='/contact' className='hover:text-white transition'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className='text-xl font-semibold mb-5'>Contact Us</h3>

            <div
              className='space-y-4'
              style={{
                color: 'var(--text-light)'
              }}
            >
              <div className='flex items-center gap-3'>
                <FaMapMarkerAlt
                  className='text-lg'
                  style={{
                    color: 'var(--teal-light)'
                  }}
                />

                <span>Kathmandu, Nepal</span>
              </div>

              <div className='flex items-center gap-3'>
                <FaEnvelope
                  className='text-lg'
                  style={{
                    color: 'var(--teal-light)'
                  }}
                />

                <span>support@batotracker.com</span>
              </div>

              <div className='flex items-center gap-3'>
                <FaPhone
                  className='text-lg'
                  style={{
                    color: 'var(--teal-light)'
                  }}
                />

                <span>+977-98XXXXXXXX</span>
              </div>
            </div>

            {/* Social Icons */}

            <div className='flex gap-5 mt-8 text-2xl'>
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

        {/* Divider */}

        <div
          className='border-t my-10'
          style={{
            borderColor: 'var(--border-light)'
          }}
        />

        {/* Bottom */}

        <div
          className='flex flex-col md:flex-row items-center justify-between gap-4 text-sm'
          style={{
            color: 'var(--text-muted)'
          }}
        >
          <p>© {new Date().getFullYear()} Bato Tracker. All rights reserved.</p>

          <div className='flex gap-6'>
            <Link href='#' className='hover:text-white transition'>
              Privacy Policy
            </Link>

            <Link href='#' className='hover:text-white transition'>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
