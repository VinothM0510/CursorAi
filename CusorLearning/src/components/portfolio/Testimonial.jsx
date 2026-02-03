import { useState, useEffect } from 'react'
import './Testimonial.css'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      position: 'CEO, Tech Solutions',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Director, Design Studio',
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      rating: 5
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'Founder, Startup Inc',
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      rating: 5
    },
    {
      id: 4,
      name: 'Sarah Williams',
      position: 'Marketing Lead, Brand Co',
      content: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="testimonial-section">
      <div className="container">
        <h2 className="testimonial-title">
          Author by <span className="author-name">{currentTestimonial.name}</span>
        </h2>
        <div className="testimonial-slider">
          <button className="slider-btn prev-btn" onClick={goToPrevious}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          
          <div className="testimonial-slide-container">
            {testimonials.map((testimonial, index) => {
              const isActive = index === currentIndex
              return (
                <div
                  key={testimonial.id}
                  className={`testimonial-card ${isActive ? 'active' : ''}`}
                >
                  <div className="quote-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <button className="slider-btn next-btn" onClick={goToNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="slider-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
