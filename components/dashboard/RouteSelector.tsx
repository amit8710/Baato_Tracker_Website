'use client'

import type { Route } from '@/services/routes'

interface RouteSelectorProps {
  routes: Route[]
  selectedRoute: Route | null
  loading?: boolean
  onChange: (route: Route | null) => void
}

export default function RouteSelector ({
  routes,
  selectedRoute,
  loading = false,
  onChange
}: RouteSelectorProps) {
  return (
    <div className='border-b border-slate-200 bg-slate-50 px-6 py-4'>
      <div className='max-w-sm'>
        <label
          className='mb-2 block text-sm font-semibold'
          style={{ color: 'var(--text-mainlight)' }}
        >
          Select Bus Route
        </label>

        <select
          disabled={loading}
          value={selectedRoute?.id ?? ''}
          onChange={e => {
            const id = Number(e.target.value)

            const route = routes.find(r => r.id === id) ?? null

            onChange(route)
          }}
          className='w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-500'
        >
          <option value=''>Choose a Route</option>

          {routes.map(route => (
            <option key={route.id} value={route.id}>
              {route.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
