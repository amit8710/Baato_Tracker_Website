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
      router.push('/dashboard')
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
        <div className='rounded-lg bg-red-100 px-4 py-3 text-sm text-red-600'>
          {error}
        </div>
      )}

      <button
        type='submit'
        className='w-full rounded-xl bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700'
      >
        Login
      </button>
    </form>
  )
}
