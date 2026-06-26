'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import FAQCard from '@/components/cards/FAQCard'
import { faqData } from '@/data/faqData'

export default function ContactFAQ () {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className='py-16' style={{ backgroundColor: 'var(--background)' }}>
      <div className='max-w-5xl mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2 }}
          className='text-center mb-12'
        >
          <span
            className='uppercase tracking-[0.25em] text-sm font-semibold'
            style={{ color: 'var(--teal-dark)' }}
          >
            Frequently Asked Questions
          </span>

          <h2
            className='mt-3 text-3xl md:text-4xl font-bold'
            style={{ color: 'var(--teal-primary)' }}
          >
            Have Questions?
          </h2>

          {/* <p
            className='mt-4 max-w-2xl mx-auto leading-7'
            style={{ color: 'var(--text-muted)' }}
          >
            Find answers to the most common questions about Bato Tracker,
            student safety, GPS tracking, and our services.
          </p> */}
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.3 }}
          className='space-y-5'
        >
          {faqData.map((faq, index) => (
            <FAQCard
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
