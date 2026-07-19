import { fetcher } from './fetcher'

export const apiClient = {
  get: <T>(url: string) => fetcher<T>(url),

  post: <T>(url: string, body?: unknown) =>
    fetcher<T>(url, {
      method: 'POST',
      body: JSON.stringify(body)
    }),

  put: <T>(url: string, body?: unknown) =>
    fetcher<T>(url, {
      method: 'PUT',
      body: JSON.stringify(body)
    }),

  patch: <T>(url: string, body?: unknown) =>
    fetcher<T>(url, {
      method: 'PATCH',
      body: JSON.stringify(body)
    }),

  delete: <T>(url: string) =>
    fetcher<T>(url, {
      method: 'DELETE'
    })
}
