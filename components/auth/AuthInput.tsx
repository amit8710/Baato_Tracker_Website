'use client'

import { InputHTMLAttributes } from 'react'

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export default function AuthInput ({ label, error, ...props }: AuthInputProps) {
  return (
    <div className='space-y-2'>
      <label className='block text-sm font-medium text-slate-700'>
        {label}
      </label>

      <input
        {...props}
        className={`
          w-full
          rounded-xl
          border
          px-4
          py-3
          text-slate-700
          bg-white
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

      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  )
}
