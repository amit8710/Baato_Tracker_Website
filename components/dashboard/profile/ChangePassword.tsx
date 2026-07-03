'use client'

import { HiKey } from 'react-icons/hi2'

export default function ChangePassword () {
  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-6'>
      {/* Header */}
      <div className='mb-6'>
        <h2
          className='text-xl font-semibold'
          style={{ color: 'var(--text-mainlight)' }}
        >
          Change Password
        </h2>

        <p className='mt-1 text-sm' style={{ color: 'var(--text-light1)' }}>
          Update your account password to keep your account secure.
        </p>
      </div>

      <form className='space-y-5'>
        <InputField
          label='Current Password'
          type='password'
          placeholder='Enter current password'
        />

        <InputField
          label='New Password'
          type='password'
          placeholder='Enter new password'
        />

        <InputField
          label='Confirm New Password'
          type='password'
          placeholder='Confirm new password'
        />

        <div className='pt-2'>
          <button
            type='submit'
            className='flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white transition hover:opacity-90'
            style={{ background: 'var(--teal-primary)' }}
          >
            <HiKey size={18} />
            Update Password
          </button>
        </div>
      </form>
    </section>
  )
}

interface InputFieldProps {
  label: string
  type: string
  placeholder: string
}

function InputField ({ label, type, placeholder }: InputFieldProps) {
  return (
    <div>
      <label
        className='mb-2 block text-sm font-medium'
        style={{ color: 'var(--text-mainlight)' }}
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-600'
      />
    </div>
  )
}
