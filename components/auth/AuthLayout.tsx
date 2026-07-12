'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import AuthHero from './AuthHero'

export default function AuthLayout () {
  const [isLogin, setIsLogin] = useState(true)

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
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>

                <p className='body-text'>
                  {isLogin
                    ? 'Sign in to continue to your dashboard.'
                    : 'Create your Baato Tracker account.'}
                </p>
              </div>

              {/* Tabs */}

              <div
                className='mb-8 flex rounded-xl p-1'
                style={{ background: '#edf2f7' }}
              >
                <button
                  onClick={() => setIsLogin(true)}
                  className='button-text flex-1 rounded-lg py-2.5 transition-all duration-300'
                  style={
                    isLogin
                      ? {
                          background: 'var(--teal-primary)',
                          color: 'var(--text-highlight)',
                          boxShadow: '0 4px 12px rgba(13,148,136,.25)'
                        }
                      : {
                          color: 'var(--text-mainlight)',
                          background: 'transparent'
                        }
                  }
                >
                  Login
                </button>

                <button
                  onClick={() => setIsLogin(false)}
                  className='button-text flex-1 rounded-lg py-2.5 transition-all duration-300'
                  style={
                    !isLogin
                      ? {
                          background: 'var(--teal-primary)',
                          color: 'var(--text-highlight)',
                          boxShadow: '0 4px 12px rgba(13,148,136,.25)'
                        }
                      : {
                          color: 'var(--text-mainlight)',
                          background: 'transparent'
                        }
                  }
                >
                  Register
                </button>
              </div>

              {/* Forms */}

              {isLogin ? (
                <LoginForm />
              ) : (
                <RegisterForm onRegisterSuccess={() => setIsLogin(true)} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
