import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { login, isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  // Redirect if already logged in
  useEffect(() => {
    if (!isLoading && isAuthenticated()) {
      navigate('/', { replace: true })
    }
  }, [isAuthenticated, isLoading, navigate])

  // Demo credentials - in production, this would be handled by a backend
  const validCredentials = {
    username: 'admin',
    password: 'password123'
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    // Validate inputs
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password')
      setIsSubmitting(false)
      return
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Check credentials
    if (username === validCredentials.username && password === validCredentials.password) {
      // Generate a token (in production, this would come from the backend)
      const token = `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      login(token)
      navigate('/')
    } else {
      setError('Invalid username or password')
    }

    setIsSubmitting(false)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <h1>Login</h1>
          <p className="login-subtitle">Please enter your credentials to continue</p>
          
          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                disabled={isSubmitting}
                autoComplete="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                disabled={isSubmitting}
                autoComplete="current-password"
              />
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={isSubmitting || !username.trim() || !password.trim()}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="login-demo-info">
            <p><strong>Demo Credentials:</strong></p>
            <p>Username: admin</p>
            <p>Password: password123</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
