'use client'

import { useState, InputHTMLAttributes } from 'react'
import { HiEye, HiEyeSlash } from 'react-icons/hi2'

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export default function PasswordInput ({
  label,
  error,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='space-y-2'>
      <label className='block text-sm font-medium text-slate-700'>
        {label}
      </label>

      <div className='relative'>
        <input
          {...props}
          type={showPassword ? 'text' : 'password'}
          className={`
            w-full
            rounded-xl
            border
            bg-white
            px-4
            py-3
            pr-12
            text-slate-700
            outline-none
            transition-all
            duration-300
            placeholder:text-slate-400

            ${
              error
                ? 'border-red-500 focus:border-red-500'
                : 'border-slate-300 focus:border-teal-500'
            }
          `}
        />

        <button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-teal-600 transition'
        >
          {showPassword ? <HiEyeSlash size={22} /> : <HiEye size={22} />}
        </button>
      </div>

      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  )
}
