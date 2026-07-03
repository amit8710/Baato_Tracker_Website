'use client'

import { useState } from 'react'

import AuthInput from './AuthInput'
import PasswordInput from './PasswordInput'
import { useAuth } from '@/context/AuthContext'

interface RegisterFormProps {
  onRegisterSuccess: () => void
}

export default function RegisterForm ({ onRegisterSuccess }: RegisterFormProps) {
  const { register } = useAuth()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError('')
    setSuccess('')

    if (!fullName || !email || !phone || !password || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    try {
      register({
        id: crypto.randomUUID(),
        fullName,
        email,
        phone,
        password
      })

      setSuccess('Account created successfully!')

      setFullName('')
      setEmail('')
      setPhone('')
      setPassword('')
      setConfirmPassword('')

      setTimeout(() => {
        onRegisterSuccess()
      }, 1500)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Registration failed.')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      <AuthInput
        label='Full Name'
        placeholder='John Doe'
        value={fullName}
        onChange={e => setFullName(e.target.value)}
      />

      <AuthInput
        label='Email Address'
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <AuthInput
        label='Phone Number'
        placeholder='98XXXXXXXX'
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />

      <PasswordInput
        label='Password'
        placeholder='Create a password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <PasswordInput
        label='Confirm Password'
        placeholder='Confirm your password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />

      {error && (
        <div className='rounded-lg bg-red-100 p-3 text-sm text-red-600'>
          {error}
        </div>
      )}

      {success && (
        <div className='rounded-lg bg-green-100 p-3 text-sm text-green-600'>
          {success}
        </div>
      )}

      <button
        type='submit'
        className='w-full rounded-xl bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700'
      >
        Create Account
      </button>
    </form>
  )
}
