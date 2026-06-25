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
      className='py-3 lg:py-3' // reduced height here
      style={{
        backgroundColor: 'var(--teal-dark)'
      }}
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
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
                text-center py-2 lg:py-2 px-3   // reduced padding here
                ${
                  index !== stats.length - 1
                    ? 'lg:border-r border-white/15'
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
                className='text-2xl lg:text-3xl mb-1 cursor-pointer'
                style={{
                  color: 'var(--text-highlight)'
                }}
              >
                {stat.icon}
              </motion.div>

              <h3
                className='text-xl lg:text-3xl font-bold mb-1'
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
                className='text-xs font-medium'
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
