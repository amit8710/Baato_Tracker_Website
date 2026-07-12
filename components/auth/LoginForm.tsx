'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import AuthInput from './AuthInput'
import PasswordInput from './PasswordInput'
import { useAuth } from '@/context/AuthContext'

export default function LoginForm () {
  const router = useRouter()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError('')

    try {
      login(email, password)

      // Redirect to Dashboard
      router.push('/admin/dashboard')
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Something went wrong.')
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      <AuthInput
        label='Email Address'
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <PasswordInput
        label='Password'
        placeholder='Enter your password'
        value={password}
        onChange={e => setPassword(e.target.value)}
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
        Login
      </button>
    </form>
  )
}
