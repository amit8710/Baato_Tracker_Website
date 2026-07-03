'use client'

import { useEffect, useState } from 'react'
import StepCard from '../cards/StepCard'

import {
  HiBuildingOffice2,
  HiTruck,
  HiMapPin,
  HiBellAlert
} from 'react-icons/hi2'

const steps = [
  {
    icon: <HiBuildingOffice2 />,
    title: 'School Registers',
    description:
      'The school adds buses, drivers, routes and student information into the Baato Tracker dashboard.'
  },
  {
    icon: <HiTruck />,
    title: 'Driver Starts Journey',
    description:
      'The driver starts the trip from the mobile app and GPS tracking begins automatically.'
  },
  {
    icon: <HiMapPin />,
    title: 'Parents Track Live',
    description:
      'Parents can monitor the live location of the school bus, estimated arrival time and route updates.'
  },
  {
    icon: <HiBellAlert />,
    title: 'Instant Notifications',
    description:
      'Automatic pickup, arrival and drop-off notifications are delivered instantly to parents.'
  }
]

export default function HowItWorksSection () {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className='relative overflow-hidden py-20 lg:py-28'
      style={{
        backgroundColor: 'var(--background)'
      }}
    >
      {/* Background Glow */}
      <div
        className='absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-[140px] opacity-20'
        style={{
          backgroundColor: 'var(--teal-light)'
        }}
      />

      <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Heading */}
        <div className='mx-auto max-w-3xl text-center'>
          <span
            className='inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em]'
            style={{
              backgroundColor: 'var(--teal-primary)',
              color: 'var(--text-highlight)'
            }}
          >
            How It Works
          </span>

          <h2
            className='mt-6 text-4xl font-bold leading-tight lg:text-5xl'
            style={{
              color: 'var(--text-mainlight)'
            }}
          >
            School Bus Tracking
            <br />
            Made Simple
          </h2>

          {/* <p
            className='mx-auto mt-6 max-w-2xl text-lg leading-8'
            style={{
              color: 'var(--foreground)'
            }}
          >
            Baato Tracker seamlessly connects schools, drivers and parents
            through live GPS tracking, smart route management and instant
            notifications.
          </p> */}
        </div>

        {/* Progress */}
        <div className='mt-12 mb-16 flex justify-center'>
          <div className='flex items-center gap-3'>
            {steps.map((_, index) => (
              <div
                key={index}
                className={`rounded-full transition-all duration-700 ${
                  activeStep === index ? 'w-16 h-2' : 'w-8 h-2'
                }`}
                style={{
                  backgroundColor:
                    activeStep === index
                      ? 'var(--teal-primary)'
                      : 'var(--teal-light)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-4'>
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isActive={activeStep === index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
