// 'use client'

// import { useEffect, useState } from 'react'

// import { routesService } from '@/services/routes'
// import type { Route } from '@/services/routes'

// export function useRoutes () {
//   const [routes, setRoutes] = useState<Route[]>([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState('')

//   useEffect(() => {
//     loadRoutes()
//   }, [])

//   async function loadRoutes () {
//     try {
//       setLoading(true)

//       const data = await routesService.getRoutes()

//       console.log('Routes:', data)

//       setRoutes(data)
//     } catch (err) {
//       if (err instanceof Error) {
//         setError(err.message)
//       }
//     } finally {
//       setLoading(false)
//     }
//   }

//   return {
//     routes,
//     loading,
//     error,
//     refresh: loadRoutes
//   }
// }

'use client'

import { useCallback, useEffect, useState } from 'react'

import { routesService } from '@/services/routes'
import type { Route } from '@/services/routes'

export function useRoutes () {
  const [routes, setRoutes] = useState<Route[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadRoutes = useCallback(async () => {
    try {
      setLoading(true)
      setError('')

      const data = await routesService.getRoutes()

      console.group('🚌 Routes API')
      console.log('Response:', data)
      console.log('Is Array:', Array.isArray(data))
      console.log('Type:', typeof data)
      console.groupEnd()

      if (Array.isArray(data)) {
        setRoutes(data)
      } else {
        console.error('❌ Routes API did not return an array:', data)

        setRoutes([])

        if (
          data &&
          typeof data === 'object' &&
          'detail' in data &&
          typeof (data as { detail?: unknown }).detail === 'string'
        ) {
          setError((data as { detail: string }).detail)
        } else {
          setError('Invalid response received from Routes API.')
        }
      }
    } catch (err) {
      console.error('❌ Failed to load routes:', err)

      setRoutes([])

      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Failed to load routes.')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadRoutes()
  }, [loadRoutes])

  return {
    routes,
    loading,
    error,
    refresh: loadRoutes
  }
}
