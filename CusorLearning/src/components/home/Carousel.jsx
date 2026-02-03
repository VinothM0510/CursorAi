import { useState, useEffect } from 'react'
import './Carousel.css'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'Welcome to Our Company',
      description: 'We provide exceptional services',
      image: 'https://via.placeholder.com/1200x400/3498db/ffffff?text=Slide+1'
    },
    {
      id: 2,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology for your business',
      image: 'https://via.placeholder.com/1200x400/e74c3c/ffffff?text=Slide+2'
    },
    {
      id: 3,
      title: 'Expert Team',
      description: 'Professional team ready to help',
      image: 'https://via.placeholder.com/1200x400/2ecc71/ffffff?text=Slide+3'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#8250;
      </button>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
