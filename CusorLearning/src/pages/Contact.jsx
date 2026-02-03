import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    inquiryType: '',
    countryCode: '+1',
    phone: '',
    message: ''
  })

  const [file, setFile] = useState(null)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile || null)
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required'
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{6,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (digits only)'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSuccessMessage('')

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Build payload for backend / email service
    const payload = new FormData()
    payload.append('username', formData.username)
    payload.append('password', formData.password)
    payload.append('email', formData.email)
    payload.append('inquiryType', formData.inquiryType)
    payload.append('countryCode', formData.countryCode)
    payload.append('phone', formData.phone)
    payload.append('message', formData.message)
    payload.append('to', 'vikvinoth@gmail.com')

    if (file) {
      payload.append('attachment', file)
    }

    // NOTE: Replace '/api/contact' with your real backend endpoint
    fetch('/api/contact', {
      method: 'POST',
      body: payload
    })
      .then(() => {
        setSuccessMessage('Your message has been sent successfully.')
        setFormData({
          username: '',
          password: '',
          email: '',
          inquiryType: '',
          countryCode: '+1',
          phone: '',
          message: ''
        })
        setFile(null)
        setErrors({})
      })
      .catch(() => {
        setSuccessMessage('There was an error sending your message. Please try again.')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us. We'd love to hear from you!</p>
        </div>
      </section>
      <section className="contact-content">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="info-item">
                <h3>📍 Address</h3>
                <p>123 Main Street, City, Country</p>
              </div>
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>info@example.com</p>
              </div>
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>+1 234 567 890</p>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && <p className="error-text">{errors.username}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <p className="error-text">{errors.password}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Type</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="">Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="feedback">Feedback</option>
                  </select>
                  {errors.inquiryType && <p className="error-text">{errors.inquiryType}</p>}
                </div>
                <div className="form-group form-group-inline">
                  <div className="country-code-wrapper">
                    <label htmlFor="countryCode">Country Code</label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+91">+91 (IN)</option>
                      <option value="+61">+61 (AU)</option>
                      <option value="+971">+971 (UAE)</option>
                    </select>
                  </div>
                  <div className="phone-wrapper">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="1234567890"
                    />
                    {errors.phone && <p className="error-text">{errors.phone}</p>}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="file">Attachment (optional)</label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="error-text">{errors.message}</p>}
                </div>
                {successMessage && <p className="success-text">{successMessage}</p>}
                <button type="submit" className="submit-btn">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-map-section">
        <div className="map-black-overlay"></div>
        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094285!2d144.9556513153169!3d-37.81732797975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c5e5f96365e4!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1614032195216!5m2!1sen!2sau"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact
