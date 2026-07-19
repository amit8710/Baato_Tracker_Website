import { apiClient } from '@/lib/api/apiClient'
import { API_ENDPOINTS } from '@/lib/api/endpoints'
import { storage } from '@/lib/auth/storage'

import type { LoginRequest, LoginResponse, User } from './auth.types'

class AuthService {
  /**
   * Login user
   */
  async login (data: LoginRequest): Promise<User> {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      data
    )

    console.log('✅ Login Response:', response)

    // Save JWT first
    storage.setToken(response.access_token)

    // Fetch the complete user profile
    const user = await this.me()

    // Save latest user
    storage.setUser(user)

    return user
  }

  /**
   * Get authenticated user
   */
  async me (): Promise<User> {
    const user = await apiClient.get<User>(API_ENDPOINTS.AUTH.ME)

    // Keep storage synchronized
    storage.setUser(user)

    return user
  }

  /**
   * Logout
   */
  async logout (): Promise<void> {
    storage.clear()
  }

  /**
   * Current user from local storage
   */
  getCurrentUser (): User | null {
    return storage.getUser<User>()
  }

  /**
   * JWT token
   */
  getAccessToken (): string | null {
    return storage.getToken()
  }

  /**
   * Authentication status
   */
  isAuthenticated (): boolean {
    return !!storage.getToken()
  }
}

export const authService = new AuthService()
