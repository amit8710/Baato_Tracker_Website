'use client'

import Image from 'next/image'
import { ChangeEvent, Dispatch, SetStateAction, useRef } from 'react'
import { HiCamera, HiUserCircle } from 'react-icons/hi2'

interface ParentProfile {
  fullName: string
  profileImage: string
}

interface ProfileHeaderProps {
  parent: ParentProfile
  setParent: Dispatch<SetStateAction<any>>
}

export default function ProfileHeader ({
  parent,
  setParent
}: ProfileHeaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChooseImage = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    // Preview image (Frontend only)
    const imageUrl = URL.createObjectURL(file)

    setParent((prev: any) => ({
      ...prev,
      profileImage: imageUrl
    }))
  }

  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-6'>
      <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
        {/* Left */}
        <div className='flex items-center gap-5'>
          <div className='relative'>
            <button
              type='button'
              onClick={handleChooseImage}
              className='group relative cursor-pointer'
            >
              {parent.profileImage ? (
                <Image
                  src={parent.profileImage}
                  alt={parent.fullName}
                  width={88}
                  height={88}
                  className='h-22 w-22 rounded-full border border-slate-200 object-cover transition group-hover:brightness-75'
                />
              ) : (
                <div
                  className='flex h-22 w-22 items-center justify-center rounded-full transition group-hover:opacity-80'
                  style={{
                    background: 'rgba(13,148,136,0.12)'
                  }}
                >
                  <HiUserCircle
                    size={62}
                    className='text-[var(--teal-primary)]'
                  />
                </div>
              )}

              <div
                className='absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white shadow-lg'
                style={{
                  background: 'var(--teal-primary)'
                }}
              >
                <HiCamera size={18} className='text-white' />
              </div>
            </button>

            <input
              ref={fileInputRef}
              type='file'
              accept='image/png,image/jpeg,image/jpg,image/webp'
              className='hidden'
              onChange={handleImageChange}
            />
          </div>

          <div>
            <h1 className='heading-2'>{parent.fullName}</h1>

            <p className='small-text mt-1'>Parent Account</p>

            <p className='small-text mt-2 max-w-lg'>
              Manage your profile information, profile photo, password and
              account preferences.
            </p>
          </div>
        </div>

        {/* Right */}
        <div
          className='button-text inline-flex items-center rounded-full px-5 py-2'
          style={{
            background: 'rgba(13,148,136,0.12)',
            color: 'var(--teal-primary)'
          }}
        >
          Active Account
        </div>
      </div>
    </section>
  )
}
