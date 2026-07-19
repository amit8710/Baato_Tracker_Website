'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode
} from 'react'

import { authService } from '@/services/auth'
import type { User } from '@/services/auth'

interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider ({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initialize()
  }, [])

  async function initialize () {
    try {
      // No JWT stored
      if (!authService.isAuthenticated()) {
        setLoading(false)
        return
      }

      // Verify token with backend
      const currentUser = await authService.me()

      setUser(currentUser)
    } catch (error) {
      console.error('Authentication initialization failed:', error)

      await authService.logout()

      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  async function login (email: string, password: string) {
    const loggedInUser = await authService.login({
      email,
      password
    })

    setUser(loggedInUser)
  }

  async function logout () {
    await authService.logout()

    setUser(null)
  }

  async function refreshUser () {
    try {
      const currentUser = await authService.me()

      setUser(currentUser)
    } catch (error) {
      console.error(error)

      await logout()
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        refreshUser
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }

  return context
}
