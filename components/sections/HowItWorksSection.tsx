'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import StepCard from '../cards/StepCard'

import {
  HiBuildingOffice2,
  HiTruck,
  HiMapPin,
  HiBellAlert,
  HiChevronDoubleRight
} from 'react-icons/hi2'

const steps = [
  {
    icon: <HiBuildingOffice2 />,
    title: 'School Registers',
    description: 'School adds buses, routes, drivers and student information.'
  },
  {
    icon: <HiTruck />,
    title: 'Driver Starts Route',
    description: 'Drivers begin the journey and tracking starts automatically.'
  },
  {
    icon: <HiMapPin />,
    title: 'Parents Track Live',
    description: 'Parents monitor the school bus location in real time.'
  },
  {
    icon: <HiBellAlert />,
    title: 'Instant Notifications',
    description: 'Receive pickup, drop-off and arrival alerts instantly.'
  }
]

export default function HowItWorksSection () {
  const [unlockedUpTo, setUnlockedUpTo] = useState(-1)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setUnlockedUpTo(0)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const handleStepClick = (index: number) => {
    if (index > unlockedUpTo) return

    setActiveStep(index)

    if (index === unlockedUpTo && unlockedUpTo < steps.length - 1) {
      setUnlockedUpTo(index + 1)
      setActiveStep(index + 1)
    }
  }

  return (
    <section
      className='relative py-10 lg:py-12 overflow-hidden'
      style={{ backgroundColor: 'var(--teal-light)' }}
    >
      {/* Background Glow */}
      <div
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-[400px] h-[400px] rounded-full blur-3xl opacity-15 pointer-events-none'
        style={{ backgroundColor: 'var(--teal-primary)' }}
      />

      <div className='relative max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center max-w-3xl mx-auto mb-10'
        >
          <span
            className='inline-block bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-[0.2em] mb-4'
            style={{ color: 'var(--teal-dark)' }}
          >
            How It Works
          </span>

          <h2
            className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4'
            style={{ color: 'var(--teal-dark)' }}
          >
            Simple Steps To Track Your School Bus
          </h2>

          <p
            className='text-base md:text-lg leading-7 max-w-2xl mx-auto'
            style={{ color: 'var(--text-muted)' }}
          >
            Bato Tracker keeps schools, parents and drivers connected through
            real-time tracking, route monitoring and instant notifications.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className='hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start'>
          {steps.map((step, index) => (
            <div key={step.title} className='contents'>
              <StepCard
                stepNumber={`0${index + 1}`}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isUnlocked={index <= unlockedUpTo}
                isActive={index === activeStep}
                onClick={() => handleStepClick(index)}
              />

              {index < steps.length - 1 && (
                <motion.div
                  className='flex justify-center items-start pt-8 px-2'
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    index < unlockedUpTo
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{
                    duration: 0.4,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <motion.div
                    animate={index < activeStep ? { x: [0, 8, 0] } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity
                    }}
                  >
                    <HiChevronDoubleRight
                      className='text-3xl'
                      style={{
                        color:
                          index < activeStep
                            ? 'var(--teal-dark)'
                            : 'rgba(17,94,89,0.25)'
                      }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Tablet & Mobile Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden'>
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              stepNumber={`0${index + 1}`}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isUnlocked={index <= unlockedUpTo}
              isActive={index === activeStep}
              onClick={() => handleStepClick(index)}
            />
          ))}
        </div>

        {/* Hint Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: unlockedUpTo < steps.length - 1 ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
          className='text-center text-sm mt-6'
          style={{ color: 'rgba(17,94,89,0.7)' }}
        >
          Click a step to unlock the next one →
        </motion.p>
      </div>
    </section>
  )
}
