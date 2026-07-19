const ACCESS_TOKEN_KEY = 'accessToken'
const USER_KEY = 'user'

export const storage = {
  getToken (): string | null {
    if (typeof window === 'undefined') {
      return null
    }

    return localStorage.getItem(ACCESS_TOKEN_KEY)
  },

  setToken (token: string): void {
    localStorage.setItem(ACCESS_TOKEN_KEY, token)
  },

  removeToken (): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
  },

  getUser<T> (): T | null {
    if (typeof window === 'undefined') {
      return null
    }

    const user = localStorage.getItem(USER_KEY)

    if (!user) {
      return null
    }

    return JSON.parse(user) as T
  },

  setUser (user: unknown): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },

  removeUser (): void {
    localStorage.removeItem(USER_KEY)
  },

  clear (): void {
    this.removeToken()
    this.removeUser()
  }
}
