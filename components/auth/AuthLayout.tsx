'use client'

import { motion } from 'framer-motion'

import LoginForm from './LoginForm'
import AuthHero from './AuthHero'

export default function AuthLayout () {
  return (
    <main className='min-h-screen bg-background'>
      <div className='mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10 lg:px-8'>
        <div className='grid w-full grid-cols-1 gap-16 lg:grid-cols-2'>
          {/* Left Side */}
          <AuthHero />

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='flex items-center justify-center'
          >
            <div
              className='w-full max-w-md rounded-3xl p-8 shadow-2xl backdrop-blur-xl'
              style={{
                background: 'rgba(255,255,255,0.82)',
                border: '1px solid var(--border-light)'
              }}
            >
              {/* Logo */}
              <div className='mb-8 text-center'>
                <div
                  className='mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-lg'
                  style={{
                    background: 'var(--teal-primary)',
                    color: 'var(--text-highlight)'
                  }}
                >
                  🚌
                </div>

                <h2 className='heading-2' style={{ marginBottom: '0.5rem' }}>
                  Welcome Back
                </h2>

                <p className='body-text'>
                  Sign in to access your child's live bus tracking,
                  notifications, and dashboard.
                </p>
              </div>

              {/* Login Form */}
              <LoginForm />

              {/* Footer */}
              <div
                className='mt-8 border-t pt-6 text-center'
                style={{
                  borderColor: 'var(--border-light)'
                }}
              >
                <p
                  className='small-text'
                  style={{
                    color: 'var(--text-muted)'
                  }}
                >
                  Don't have an account?
                </p>

                <p
                  className='mt-2 text-sm'
                  style={{
                    color: 'var(--text-mainlight)'
                  }}
                >
                  Please contact your school administrator to obtain your login
                  credentials.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
