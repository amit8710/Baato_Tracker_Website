export interface LoginRequest {
  email: string
  password: string
}

export interface User {
  id: number
  email: string
  full_name: string
  role: 'parent' | 'driver' | 'admin' | string
}

export interface LoginResponse {
  access_token: string
  token_type: string

  user: User

  device_id: string
  device_name: string
  driver_id: number
  parent_id: number
  server_url: string
}
