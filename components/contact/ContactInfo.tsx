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
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid lg:grid-cols-5 gap-10 items-center'>
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
              className='uppercase tracking-[0.25em] text-sm font-semibold'
              style={{ color: 'var(--text-highlight)' }}
            >
              Contact Us
            </span>

            <h2
              className='mt-3 text-3xl lg:text-4xl font-bold leading-tight'
              style={{ color: 'var(--text-highlight)' }}
            >
              We'd Love to Hear From You
            </h2>

            <p
              className='mt-5 leading-7'
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
                      className='w-12 h-12 rounded-xl flex items-center justify-center shadow-md'
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
                        className='font-semibold'
                        style={{ color: 'var(--text-highlight)' }}
                      >
                        {item.title}
                      </h4>

                      <p style={{ color: 'var(--text-light)' }}>{item.value}</p>
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
            className='lg:col-span-3 bg-white rounded-3xl shadow-2xl p-8 lg:p-10'
          >
            <h3
              className='text-2xl font-bold mb-6'
              style={{ color: 'var(--teal-dark)' }}
            >
              Send Us a Message
            </h3>

            <form className='space-y-5'>
              <div className='grid md:grid-cols-2 gap-5'>
                <input
                  type='text'
                  placeholder='Full Name'
                  className='w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 transition-all'
                  style={{
                    borderColor: 'var(--teal-primary)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--text-mainlight)'
                  }}
                />

                <input
                  type='email'
                  placeholder='Email Address'
                  className='w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 transition-all'
                  style={{
                    borderColor: 'var(--teal-primary)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--text-mainlight)'
                  }}
                />
              </div>

              <div className='grid md:grid-cols-2 gap-5'>
                <input
                  type='tel'
                  placeholder='Phone Number'
                  className='w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 transition-all'
                  style={{
                    borderColor: 'var(--teal-primary)',
                    backgroundColor: 'var(--background)',
                    color: 'var(--text-mainlight)'
                  }}
                />

                <input
                  type='text'
                  placeholder='Subject'
                  className='w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 transition-all'
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
                className='w-full rounded-xl border px-4 py-3 outline-none resize-none focus:ring-2 transition-all'
                style={{
                  borderColor: 'var(--teal-primary)',
                  backgroundColor: 'var(--background)',
                  color: 'var(--text-mainlight)'
                }}
              />

              <div className='flex justify-end mt-6'>
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
