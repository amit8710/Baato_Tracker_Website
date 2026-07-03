import ProfileHeader from '@/components/dashboard/profile/ProfileHeader'
import PersonalInformation from '@/components/dashboard/profile/PersonalInformation'
import ChangePassword from '@/components/dashboard/profile/ChangePassword'

export default function ProfilePage () {
  return (
    <main
      className='min-h-screen py-8'
      style={{ background: 'var(--background)' }}
    >
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 lg:px-8'>
        {/* Profile Header */}
        <ProfileHeader />

        {/* Personal Information */}
        <PersonalInformation />

        {/* Change Password */}
        <ChangePassword />
      </div>
    </main>
  )
}
