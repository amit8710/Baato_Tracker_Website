import { ReactNode } from 'react'

type FeatureCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard ({
  icon,
  title,
  description
}: FeatureCardProps) {
  return (
    <div className='flex items-center gap-4 bg-white rounded-3xl px-5 py-4 shadow-xl border border-slate-100 w-[320px] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300'>
      <div className='flex items-center justify-center w-14 h-14 rounded-2xl bg-teal-primary/10 text-teal-primary text-3xl flex-shrink-0'>
        {icon}
      </div>

      <div>
        <h3 className='text-lg font-semibold text-slate-800'>{title}</h3>

        <p className='text-sm text-slate-500 leading-relaxed'>{description}</p>
      </div>
    </div>
  )
}
