import { apiClient } from '@/lib/api/apiClient'
import { API_ENDPOINTS } from '@/lib/api/endpoints'

import type { Route, RoutesResponse } from './routes.types'

class RoutesService {
  async getRoutes (): Promise<Route[]> {
    return apiClient.get<RoutesResponse>(API_ENDPOINTS.ROUTES)
  }
}

export const routesService = new RoutesService()
