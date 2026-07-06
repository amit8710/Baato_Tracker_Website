'use client'

import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

import Button from '@/components/common/Button'

const contactDetails = [
  {
    icon: FaMapMarkerAlt,
    title: 'Office Address',
    value: 'Kathmandu, Nepal'
  },
  {
    icon: FaPhoneAlt,
    title: 'Phone Number',
    value: '+977 98XXXXXXXX'
  },
  {
    icon: FaEnvelope,
    title: 'Email Address',
    value: 'info@batotracker.com'
  },
  {
    icon: FaClock,
    title: 'Office Hours',
    value: 'Sun - Fri : 9:00 AM - 5:00 PM'
  }
]

export default function ContactInfo () {
  return (
    <section className='py-16' style={{ backgroundColor: 'var(--teal-light)' }}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid items-center gap-10 lg:grid-cols-5'>
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.5,
              ease: 'easeOut'
            }}
            className='lg:col-span-2'
          >
            <span
              className='section-label'
              style={{ color: 'var(--text-highlight)' }}
            >
              Contact Us
            </span>

            <h2
              className='heading-2 mt-3'
              style={{ color: 'var(--text-highlight)' }}
            >
              We'd Love to Hear From You
            </h2>

            <p
              className='body-text mt-5'
              style={{ color: 'var(--text-light)' }}
            >
              Whether you're a school, parent, or partner, we're here to help.
              Contact us for support, inquiries, or partnership opportunities.
            </p>

            <div className='mt-10 space-y-6'>
              {contactDetails.map((item, index) => {
                const Icon = item.icon

                return (
                  <div key={index} className='flex items-start gap-4'>
                    <div
                      className='flex h-12 w-12 items-center justify-center rounded-xl shadow-md'
                      style={{
                        backgroundColor: 'var(--teal-dark)'
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: 'var(--text-highlight)' }}
                      />
                    </div>

                    <div>
                      <h4
                        className='heading-4'
                        style={{ color: 'var(--text-highlight)' }}
                      >
                        {item.title}
                      </h4>

                      <p
                        className='body-text'
                        style={{ color: 'var(--text-light)' }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.5,
              ease: 'easeOut'
            }}
            className='rounded-3xl bg-white p-8 shadow-2xl lg:col-span-3 lg:p-10'
          >
            <h3
              className='heading-3 mb-6'
              style={{ color: 'var(--teal-dark)' }}
            >
              Send Us a Message
            </h3>

            <form className='space-y-5'>
              <div className='grid gap-5 md:grid-cols-2'>
                <input
                  type='text'
                  placeholder='Full Name'
                  className='body-text w-full rounded-xl border px-4 py-3 outline-none transition-all focus:ring-2'
                  style={{
                    borderColor: 'var(--teal-primary)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--text-mainlight)'
                  }}
                />

                <input
                  type='email'
                  placeholder='Email Address'
                  className='body-text w-full rounded-xl border px-4 py-3 outline-none transition-all focus:ring-2'
                  style={{
                    borderColor: 'var(--teal-primary)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--text-mainlight)'
                  }}
                />
              </div>

              <div className='grid gap-5 md:grid-cols-2'>
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='body-text w-full rounded-xl border px-4 py-3 outline-none transition-all focus:ring-2'
                  style={{
                    borderColor: 'var(--teal-primary)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--text-mainlight)'
                  }}
                />

                <input
                  type='text'
                  placeholder='Subject'
                  className='body-text w-full rounded-xl border px-4 py-3 outline-none transition-all focus:ring-2'
                  style={{
                    borderColor: 'var(--teal-primary)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--text-mainlight)'
                  }}
                />
              </div>

              <textarea
                rows={6}
                placeholder='Write your message...'
                className='body-text w-full resize-none rounded-xl border px-4 py-3 outline-none transition-all focus:ring-2'
                style={{
                  borderColor: 'var(--teal-primary)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-mainlight)'
                }}
              />

              <div className='mt-6 flex justify-end'>
                <div className='scale-110'>
                  <Button text='Send Message' href='#' />
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
