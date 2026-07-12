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
        <div
          className='small-text rounded-xl px-4 py-3'
          style={{
            background: 'rgba(220, 38, 38, 0.08)',
            color: 'var(--status-danger)',
            border: '1px solid rgba(220, 38, 38, 0.15)'
          }}
        >
          {error}
        </div>
      )}

      {success && (
        <div
          className='small-text rounded-xl px-4 py-3'
          style={{
            background: 'rgba(22, 163, 74, 0.08)',
            color: 'var(--status-success)',
            border: '1px solid rgba(22, 163, 74, 0.15)'
          }}
        >
          {success}
        </div>
      )}

      <button
        type='submit'
        className='button-text w-full rounded-xl py-3 transition-all duration-300 hover:-translate-y-0.5'
        style={{
          background: 'var(--teal-primary)',
          color: 'var(--text-highlight)',
          boxShadow: '0 8px 24px rgba(13, 148, 136, 0.2)'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'var(--teal-dark)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'var(--teal-primary)'
        }}
      >
        Create Account
      </button>
    </form>
  )
}
