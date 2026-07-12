'use client'

import { useState } from 'react'
import { HiCheckCircle, HiEye, HiEyeSlash, HiKey } from 'react-icons/hi2'

export default function ChangePassword () {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setError('')
    setMessage('')

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }

    if (newPassword.length < 8) {
      setError('New password must be at least 8 characters long.')
      return
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    // Frontend preview
    setTimeout(() => {
      setLoading(false)

      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')

      setMessage('Password updated successfully.')
    }, 1200)
  }

  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-6'>
      {/* Header */}
      <div className='mb-8'>
        <h2 className='heading-3'>Change Password</h2>

        <p className='small-text mt-1'>
          Keep your account secure by choosing a strong password.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='space-y-6'>
        <PasswordField
          label='Current Password'
          value={currentPassword}
          setValue={setCurrentPassword}
          visible={showCurrent}
          setVisible={setShowCurrent}
          placeholder='Enter your current password'
        />

        <PasswordField
          label='New Password'
          value={newPassword}
          setValue={setNewPassword}
          visible={showNew}
          setVisible={setShowNew}
          placeholder='Enter your new password'
        />

        <PasswordField
          label='Confirm Password'
          value={confirmPassword}
          setValue={setConfirmPassword}
          visible={showConfirm}
          setVisible={setShowConfirm}
          placeholder='Confirm your new password'
        />

        {error && (
          <div className='rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600'>
            {error}
          </div>
        )}

        {message && (
          <div className='flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700'>
            <HiCheckCircle size={18} />
            {message}
          </div>
        )}

        <button
          type='submit'
          disabled={loading}
          className='button-text flex items-center gap-2 rounded-xl px-6 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60'
          style={{
            background: 'var(--teal-primary)'
          }}
        >
          <HiKey size={18} />

          {loading ? 'Updating Password...' : 'Update Password'}
        </button>
      </form>
    </section>
  )
}

interface PasswordFieldProps {
  label: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  placeholder: string
}

function PasswordField ({
  label,
  value,
  setValue,
  visible,
  setVisible,
  placeholder
}: PasswordFieldProps) {
  return (
    <div>
      <label className='label-text mb-2 block'>{label}</label>

      <div className='relative'>
        <input
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder={placeholder}
          className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 outline-none transition focus:border-[var(--teal-primary)]'
        />

        <button
          type='button'
          onClick={() => setVisible(!visible)}
          className='absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-light1)] transition hover:text-[var(--teal-primary)]'
        >
          {visible ? <HiEyeSlash size={20} /> : <HiEye size={20} />}
        </button>
      </div>
    </div>
  )
}
