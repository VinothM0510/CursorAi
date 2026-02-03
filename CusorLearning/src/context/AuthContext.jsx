import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if token exists in localStorage on mount
    const storedToken = localStorage.getItem('authToken')
    if (storedToken) {
      setToken(storedToken)
    }
    setIsLoading(false)
  }, [])

  const login = (userToken) => {
    setToken(userToken)
    localStorage.setItem('authToken', userToken)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('authToken')
  }

  const isAuthenticated = () => {
    return !!token
  }

  const value = {
    token,
    login,
    logout,
    isAuthenticated,
    isLoading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
