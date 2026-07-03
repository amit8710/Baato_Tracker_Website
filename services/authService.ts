export interface User {
  id: string
  fullName: string
  email: string
  phone: string
  password: string
}

const USERS_KEY = 'baato_users'
const CURRENT_USER_KEY = 'baato_current_user'

export const authService = {
  register (user: User) {
    const users: User[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')

    const userExists = users.find(u => u.email === user.email)

    if (userExists) {
      throw new Error('Email already exists.')
    }

    users.push(user)

    localStorage.setItem(USERS_KEY, JSON.stringify(users))

    return user
  },

  login (email: string, password: string) {
    const users: User[] = JSON.parse(localStorage.getItem(USERS_KEY) || '[]')

    const user = users.find(u => u.email === email && u.password === password)

    if (!user) {
      throw new Error('Invalid email or password.')
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user))

    return user
  },

  logout () {
    localStorage.removeItem(CURRENT_USER_KEY)
  },

  getCurrentUser () {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || 'null')
  },

  isAuthenticated () {
    return !!localStorage.getItem(CURRENT_USER_KEY)
  }
}
