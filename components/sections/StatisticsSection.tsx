'use client'

import CountUp from 'react-countup'
import { motion } from 'framer-motion'

import {
  HiBuildingOffice2,
  HiUsers,
  HiUserGroup,
  HiTruck
} from 'react-icons/hi2'

const stats = [
  {
    icon: <HiBuildingOffice2 />,
    value: 120,
    suffix: '+',
    label: 'Schools'
  },
  {
    icon: <HiUsers />,
    value: 15000,
    suffix: '+',
    label: 'Children'
  },
  {
    icon: <HiUserGroup />,
    value: 20000,
    suffix: '+',
    label: 'Parents'
  },
  {
    icon: <HiTruck />,
    value: 500,
    suffix: '+',
    label: 'Drivers'
  }
]

export default function StatisticsSection () {
  return (
    <section
      className='py-3 lg:py-3'
      style={{
        backgroundColor: 'var(--teal-dark)'
      }}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className={`
                flex flex-col items-center justify-center
                px-3 py-2 text-center
                ${
                  index !== stats.length - 1
                    ? 'border-white/15 lg:border-r'
                    : ''
                }
              `}
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  y: -6
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300
                }}
                className='mb-1 cursor-pointer text-2xl lg:text-3xl'
                style={{
                  color: 'var(--text-highlight)'
                }}
              >
                {stat.icon}
              </motion.div>

              <h3
                className='heading-3 mb-1'
                style={{
                  color: 'var(--text-highlight)'
                }}
              >
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={3}
                  separator=','
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </h3>

              <p
                className='small-text'
                style={{
                  color: 'var(--text-highlight)'
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
