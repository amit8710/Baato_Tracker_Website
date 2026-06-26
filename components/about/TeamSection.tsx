'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'

type TabKey = 'board' | 'advisors' | 'leadership'

const tabs: { key: TabKey; label: string }[] = [
  { key: 'board', label: 'Board of Directors' },
  { key: 'advisors', label: 'Advisors' },
  { key: 'leadership', label: 'Leadership Team' }
]

const teamData: Record<
  TabKey,
  {
    name: string
    role: string
    company: string
    image: string
    linkedin: string
  }[]
> = {
  board: [
    {
      name: 'Anil Sharma',
      role: 'Chairman',
      company: 'Bato Tracker',
      image: '/profile.jpg',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Ramesh Khatri',
      role: 'Board Member',
      company: 'Bato Tracker',
      image: '/team/team2.jpg',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Sunita Rai',
      role: 'Board Member',
      company: 'Bato Tracker',
      image: '/pro.png',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Prakash Lama',
      role: 'Board Member',
      company: 'Bato Tracker',
      image: '/team/team4.jpg',
      linkedin: 'https://linkedin.com'
    }
  ],

  advisors: [
    {
      name: 'Dr. Hari Adhikari',
      role: 'Tech Advisor',
      company: 'Bato Tracker',
      image: '/pro.png',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Meera Joshi',
      role: 'Business Advisor',
      company: 'Bato Tracker',
      image: '/pro.png',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Rajendra Bhandari',
      role: 'Safety Advisor',
      company: 'Bato Tracker',
      image: '/team/team3.jpg',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Nisha Shrestha',
      role: 'Strategy Advisor',
      company: 'Bato Tracker',
      image: '/team/team4.jpg',
      linkedin: 'https://linkedin.com'
    }
  ],

  leadership: [
    {
      name: 'Purna Karki',
      role: 'Founder & Lead Trekking Guide',
      company: 'Bato Tracker',
      image: '/pro.png',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Sita Gurung',
      role: 'Operations Manager',
      company: 'Bato Tracker',
      image: '/pro.png',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Ram Thapa',
      role: 'Senior Trekking Guide',
      company: 'Bato Tracker',
      image: '/team/team3.jpg',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Maya Shrestha',
      role: 'Head of Logistics',
      company: 'Bato Tracker',
      image: '/team/team4.jpg',
      linkedin: 'https://linkedin.com'
    }
  ]
}

export default function TeamSection () {
  const [activeTab, setActiveTab] = useState<TabKey>('leadership')
  const members = teamData[activeTab]

  return (
    <section className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center mb-10'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            <span style={{ color: 'var(--teal-primary)' }}>Our </span>
            <span style={{ color: 'var(--teal-dark)' }}>Teams</span>
          </h2>

          {/* <p
            className='mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed'
            style={{ color: 'var(--text-mainlight)' }}
          >
            Our leadership team comprises visionary innovators, seasoned
            professionals, technologists, and domain experts committed to
            building impactful solutions.
          </p> */}
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-10'>
          <div
            className='flex border-b w-full max-w-md'
            style={{ borderColor: 'var(--border-light)' }}
          >
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className='flex-1 py-3 px-4 text-sm font-medium transition-all duration-200'
                style={{
                  color:
                    activeTab === tab.key
                      ? 'var(--teal-primary)'
                      : 'var(--text-mainlight)',
                  borderBottom:
                    activeTab === tab.key
                      ? '2px solid var(--teal-primary)'
                      : '2px solid transparent',
                  background:
                    activeTab === tab.key
                      ? 'rgba(13,148,136,0.05)'
                      : 'transparent'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Section Title */}
        <h3
          className='text-xl font-bold mb-6'
          style={{ color: 'var(--teal-dark)' }}
        >
          {tabs.find(t => t.key === activeTab)?.label}
        </h3>

        {/* Grid */}
        {members.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
            {members.map((member, index) => (
              <div
                key={index}
                className='flex flex-col items-center text-center'
              >
                {/* Image */}
                <div
                  className='w-full aspect-square relative overflow-hidden rounded-md'
                  style={{
                    backgroundColor: 'var(--background)',
                    maxWidth: '260px'
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className='object-cover object-top'
                  />
                </div>

                {/* Name */}
                <h4
                  className='mt-3 text-sm font-semibold'
                  style={{ color: 'var(--teal-primary)' }}
                >
                  {member.name}
                </h4>

                {/* Role */}
                <p
                  className='text-xs font-medium tracking-widest uppercase mt-0.5'
                  style={{ color: 'var(--text-mainlight)' }}
                >
                  {member.role}
                </p>

                {/* Company */}
                <p
                  className='text-xs mt-0.5'
                  style={{ color: 'var(--teal-dark)' }}
                >
                  {member.company}
                </p>

                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-3 transition-transform duration-200 hover:scale-110'
                  style={{ color: 'var(--teal-primary)' }}
                >
                  <FaLinkedin size={22} />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p
            className='text-center py-12'
            style={{ color: 'var(--text-muted)' }}
          >
            No members listed for this category yet.
          </p>
        )}
      </div>
    </section>
  )
}
