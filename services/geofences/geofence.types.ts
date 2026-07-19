export interface Geofence {
  id: number
  name: string
  lat: number
  lng: number
  is_enabled: boolean
  created_at: string
}

export interface CreateGeofenceRequest {
  name: string
  lat: number
  lng: number
  email: string
  enabled: boolean
}
