import './Certification.css'

const Certification = () => {
  const certifications = [
    {
      id: 1,
      title: 'ISO 9001:2015',
      description: 'Quality Management System',
      image: 'https://via.placeholder.com/200/3498db/ffffff?text=ISO+9001'
    },
    {
      id: 2,
      title: 'ISO 27001',
      description: 'Information Security Management',
      image: 'https://via.placeholder.com/200/e74c3c/ffffff?text=ISO+27001'
    },
    {
      id: 3,
      title: 'AWS Certified',
      description: 'Cloud Solutions Provider',
      image: 'https://via.placeholder.com/200/2ecc71/ffffff?text=AWS'
    },
    {
      id: 4,
      title: 'Microsoft Partner',
      description: 'Certified Technology Partner',
      image: 'https://via.placeholder.com/200/f39c12/ffffff?text=Microsoft'
    }
  ]

  return (
    <section className="certification-section">
      <div className="container">
        <h2 className="section-title">Certifications & Awards</h2>
        <p className="section-description">
          We maintain the highest standards and are recognized by leading industry organizations.
        </p>
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <img src={cert.image} alt={cert.title} />
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certification
