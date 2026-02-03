import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Services</p>
            <p>Portfolio</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Social Media Links</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
