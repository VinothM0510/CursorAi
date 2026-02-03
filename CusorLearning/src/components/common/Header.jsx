import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Header.css'

const Header = () => {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <nav className="nav">
          {isAuthenticated() ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/contact">Contact</Link>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
