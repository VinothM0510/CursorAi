import './ProjectSection.css'

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with advanced shopping cart, payment integration, and inventory management features.',
      image: 'https://via.placeholder.com/600/3498db/ffffff?text=E-Commerce+Platform',
      link: '#'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and real-time transaction monitoring.',
      image: 'https://via.placeholder.com/600/e74c3c/ffffff?text=Mobile+Banking+App',
      link: '#'
    },
    {
      id: 3,
      title: 'Corporate Website',
      description: 'Professional corporate website with responsive design, CMS integration, and SEO optimization.',
      image: 'https://via.placeholder.com/600/2ecc71/ffffff?text=Corporate+Website',
      link: '#'
    },
    {
      id: 4,
      title: 'Food Delivery System',
      description: 'Complete food delivery platform with real-time tracking, multiple payment options, and restaurant management.',
      image: 'https://via.placeholder.com/600/f39c12/ffffff?text=Food+Delivery+System',
      link: '#'
    },
    {
      id: 5,
      title: 'Learning Management System',
      description: 'Comprehensive LMS with course management, student progress tracking, and interactive learning modules.',
      image: 'https://via.placeholder.com/600/9b59b6/ffffff?text=Learning+Management',
      link: '#'
    },
    {
      id: 6,
      title: 'Healthcare Portal',
      description: 'Patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
      image: 'https://via.placeholder.com/600/1abc9c/ffffff?text=Healthcare+Portal',
      link: '#'
    }
  ]

  return (
    <section className="project-section">
      <div className="title-grid-section">
        <div className="container">
          <h2 className="project-section-title">Our Projects</h2>
        </div>
      </div>
      <div className="description-grid-section">
        <div className="container">
          <p className="project-section-subtitle">
            Explore our portfolio of successful projects and innovative solutions
          </p>
        </div>
      </div>
      <div className="container">
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
