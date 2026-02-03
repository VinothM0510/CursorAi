import Testimonial from '../components/portfolio/Testimonial'
import ProjectSection from '../components/portfolio/ProjectSection'
import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of project 1',
      image: 'https://via.placeholder.com/400/3498db/ffffff?text=Project+1',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of project 2',
      image: 'https://via.placeholder.com/400/e74c3c/ffffff?text=Project+2',
      category: 'Mobile App'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of project 3',
      image: 'https://via.placeholder.com/400/2ecc71/ffffff?text=Project+3',
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of project 4',
      image: 'https://via.placeholder.com/400/f39c12/ffffff?text=Project+4',
      category: 'Design'
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description of project 5',
      image: 'https://via.placeholder.com/400/9b59b6/ffffff?text=Project+5',
      category: 'Mobile App'
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description of project 6',
      image: 'https://via.placeholder.com/400/1abc9c/ffffff?text=Project+6',
      category: 'Web Development'
    }
  ]

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Showcasing our best work and successful projects</p>
        </div>
      </section>
      <section className="portfolio-content">
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-overlay">
                    <span className="portfolio-category">{project.category}</span>
                  </div>
                </div>
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProjectSection />
      <Testimonial />
    </div>
  )
}

export default Portfolio
