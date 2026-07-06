'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

import Button from '@/components/common/Button'
import DownloadStepCard from '@/components/cards/DownloadStepCard'
import { appDownloadStepsData } from '@/data/appDownloadStepsData'

export default function GetStarted () {
  return (
    <section className='py-20' style={{ backgroundColor: 'var(--background)' }}>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            ease: 'easeOut'
          }}
          className='mx-auto mb-16 max-w-3xl text-center'
        >
          <span
            className='section-label'
            style={{ color: 'var(--teal-primary)' }}
          >
            Get Started
          </span>

          <h2 className='heading-2 mt-4' style={{ color: 'var(--teal-dark)' }}>
            Start Tracking in Just
            <br />
            Three Easy Steps
          </h2>

          <p
            className='body-text mt-5'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Getting started with Baato Tracker is simple. Download the app,
            create your account and begin tracking your school bus in real time.
          </p>
        </motion.div>

        {/* Desktop Steps */}
        <div className='hidden items-center gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr]'>
          {appDownloadStepsData.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={step.id} className='contents'>
                <DownloadStepCard
                  step={`0${step.id}`}
                  icon={Icon}
                  title={step.title}
                  description={step.description}
                  delay={index * 0.2}
                />

                {index < appDownloadStepsData.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.3
                    }}
                    className='flex justify-center'
                  >
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity
                      }}
                    >
                      <FaArrowRight
                        size={30}
                        style={{ color: 'var(--teal-primary)' }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile Steps */}
        <div className='grid gap-8 lg:hidden'>
          {appDownloadStepsData.map((step, index) => {
            const Icon = step.icon

            return (
              <DownloadStepCard
                key={step.id}
                step={`0${step.id}`}
                icon={Icon}
                title={step.title}
                description={step.description}
                delay={index * 0.2}
              />
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
            delay: 0.6
          }}
          className='mt-20 text-center'
        >
          <h3 className='heading-3' style={{ color: 'var(--teal-dark)' }}>
            Ready to Get Started?
          </h3>

          <p
            className='body-text mx-auto mt-4 max-w-2xl'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Download Baato Tracker today and experience a smarter, safer and
            more connected school transportation system.
          </p>

          <div className='mt-10 flex flex-col justify-center gap-5 sm:flex-row'>
            <Button
              text='Google Play'
              href='https://play.google.com/store/apps/details?id=com.google.android.apps.classroom'
            />

            <Button
              text='App Store'
              href='https://play.google.com/store/apps/details?id=com.google.android.apps.classroom'
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
