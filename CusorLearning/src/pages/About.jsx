import { useEffect } from 'react'
import Client from '../components/about/Client'
import Certification from '../components/about/Certification'
import './About.css'

const About = () => {
  useEffect(() => {
    document.body.classList.add('about-page-active')
    return () => {
      document.body.classList.remove('about-page-active')
    }
  }, [])

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>
            We are a leading company dedicated to providing exceptional services
            and innovative solutions to our clients worldwide.
          </p>
        </div>
      </section>
      <section className="about-content">
        <div className="container">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to transform the industry, we have been
              serving clients with dedication and excellence for many years.
              Our team of experts is committed to delivering the best results.
            </p>
            <h2>Our Mission</h2>
            <p>
              To provide innovative solutions that help our clients achieve
              their goals while maintaining the highest standards of quality
              and service.
            </p>
          </div>
        </div>
      </section>
      <Client />
      <Certification />
    </div>
  )
}

export default About
