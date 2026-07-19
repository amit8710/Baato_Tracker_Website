'use client'

import { useCallback, useEffect, useState } from 'react'

import {
  geofenceService,
  type Geofence,
  type CreateGeofenceRequest
} from '@/services/geofences'

export function useGeofences (email: string, groupId: number) {
  const [geofences, setGeofences] = useState<Geofence[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchGeofences = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const data = await geofenceService.getGeofences(email, groupId)

      setGeofences(data)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Failed to fetch geofences')
      }
    } finally {
      setLoading(false)
    }
  }, [email, groupId])

  const createGeofence = async (payload: CreateGeofenceRequest) => {
    const geofence = await geofenceService.createGeofence(payload)

    await fetchGeofences()

    return geofence
  }

  useEffect(() => {
    if (!email || !groupId) return

    fetchGeofences()
  }, [fetchGeofences, email, groupId])

  return {
    geofences,
    loading,
    error,
    refresh: fetchGeofences,
    createGeofence
  }
}
