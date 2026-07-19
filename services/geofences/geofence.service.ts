import { apiClient } from '@/lib/api/apiClient'
import { API_ENDPOINTS } from '@/lib/api/endpoints'

import type { Geofence, CreateGeofenceRequest } from './geofence.types'

class GeofenceService {
  /**
   * Get all geofences
   */
  async getGeofences (email: string, groupId: number): Promise<Geofence[]> {
    return apiClient.get<Geofence[]>(
      `${API_ENDPOINTS.GEOFENCES}?email=${encodeURIComponent(
        email
      )}&group_id=${groupId}`
    )
  }

  /**
   * Create a new geofence
   */
  async createGeofence (data: CreateGeofenceRequest): Promise<Geofence> {
    return apiClient.post<Geofence>(API_ENDPOINTS.GEOFENCES, data)
  }
}

export const geofenceService = new GeofenceService()
