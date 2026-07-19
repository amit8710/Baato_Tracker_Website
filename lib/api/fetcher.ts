import { storage } from '../auth/storage'

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!

export async function fetcher<T> (
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const jwt = storage.getToken()

  const headers = new Headers(options.headers)

  // Don't force JSON when uploading files
  if (!(options.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json')
  }

  // Authorization
  if (jwt) {
    headers.set('Authorization', `Bearer ${jwt}`)
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
    cache: 'no-store'
  })

  // Session expired
  if (response.status === 401) {
    storage.clear()

    if (typeof window !== 'undefined') {
      window.location.replace('/admin/login')
    }

    throw new Error('Session expired. Please login again.')
  }

  // Handle non-success responses
  if (!response.ok) {
    let message = 'Something went wrong'

    const contentType = response.headers.get('content-type') || ''

    if (contentType.includes('application/json')) {
      try {
        const data = await response.json()

        if (typeof data === 'string') {
          message = data
        } else if (Array.isArray(data.detail)) {
          message = data.detail
            .map((item: { msg?: string }) => item.msg)
            .join(', ')
        } else {
          message =
            data.detail || data.message || data.error || JSON.stringify(data)
        }
      } catch {
        message = response.statusText
      }
    } else {
      message = await response.text()
    }

    throw new Error(message)
  }

  // No Content
  if (response.status === 204) {
    return null as T
  }

  // Empty response body
  const text = await response.text()

  if (!text.trim()) {
    return null as T
  }

  // JSON response
  try {
    return JSON.parse(text) as T
  } catch {
    // Plain text response
    return text as T
  }
}
