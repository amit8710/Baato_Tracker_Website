'use client'

import { useState } from 'react'

import ProfileHeader from '@/components/dashboard/profile/ProfileHeader'
import PersonalInformation from '@/components/dashboard/profile/PersonalInformation'
import ChangePassword from '@/components/dashboard/profile/ChangePassword'

export default function ProfilePage () {
  const [parent, setParent] = useState({
    fullName: 'Amit Basnet',
    email: 'amit@email.com',
    phone: '+977 9812345678',
    address: 'Kathmandu, Nepal',
    parentId: 'PAR-1001',
    childName: 'Aarav Basnet',
    profileImage: ''
  })

  return (
    <main
      className='min-h-screen py-8'
      style={{ background: 'var(--background)' }}
    >
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 lg:px-8'>
        {/* Profile Header */}
        <ProfileHeader parent={parent} setParent={setParent} />
        {/* Personal Information */}
        <PersonalInformation parent={parent} setParent={setParent} />

        {/* Change Password */}
        <ChangePassword />
      </div>
    </main>
  )
}
