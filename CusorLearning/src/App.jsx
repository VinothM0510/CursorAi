import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ProtectedRoute from './components/common/ProtectedRoute'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/services"
              element={
                <ProtectedRoute>
                  <Services />
                </ProtectedRoute>
              }
            />
            <Route
              path="/portfolio"
              element={
                <ProtectedRoute>
                  <Portfolio />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <ProtectedRoute>
                  <Contact />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
