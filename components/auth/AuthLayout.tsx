'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import AuthHero from './AuthHero'

export default function AuthLayout () {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <main className='min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50'>
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
            <div className='w-full max-w-md rounded-3xl border border-white/30 bg-white/70 p-8 shadow-2xl backdrop-blur-xl'>
              {/* Logo */}
              <div className='mb-8 text-center'>
                <div className='mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-600 text-3xl text-white shadow-lg'>
                  🚌
                </div>

                <h2 className='text-3xl font-bold text-slate-900'>
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h2>

                <p className='mt-2 text-slate-500'>
                  {isLogin
                    ? 'Sign in to continue to your dashboard.'
                    : 'Create your Baato Tracker account.'}
                </p>
              </div>

              {/* Tabs */}

              <div className='mb-8 flex rounded-xl bg-slate-100 p-1'>
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 rounded-lg py-2.5 font-medium transition ${
                    isLogin
                      ? 'bg-teal-600 text-white shadow'
                      : 'text-slate-600 hover:text-teal-600'
                  }`}
                >
                  Login
                </button>

                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 rounded-lg py-2.5 font-medium transition ${
                    !isLogin
                      ? 'bg-teal-600 text-white shadow'
                      : 'text-slate-600 hover:text-teal-600'
                  }`}
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
