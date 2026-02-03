import Carousel from '../components/home/Carousel'
import ClientIcon from '../components/services/ClientIcon'
import WordIconCard from '../components/services/WordIconCard'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: '📱'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      icon: '☁️'
    },
    {
      id: 4,
      title: 'Consulting',
      description: 'Expert advice and strategic planning',
      icon: '💼'
    },
    {
      id: 5,
      title: 'Design',
      description: 'Beautiful and intuitive user interfaces',
      icon: '🎨'
    },
    {
      id: 6,
      title: 'Support',
      description: '24/7 technical support and maintenance',
      icon: '🛠️'
    }
  ]

  const clients = [
    {
      id: 1,
      icon: '🏢',
      name: 'Tech Corp',
      description: 'Leading technology solutions provider',
      details: 'We have been working with Tech Corp for over 5 years, delivering innovative solutions.'
    },
    {
      id: 2,
      icon: '💼',
      name: 'Business Inc',
      description: 'Enterprise business solutions',
      details: 'Helping Business Inc transform their digital infrastructure with cutting-edge technology.'
    },
    {
      id: 3,
      icon: '🚀',
      name: 'Startup Hub',
      description: 'Fast-growing startup ecosystem',
      details: 'Supporting startups with scalable solutions and expert guidance.'
    },
    {
      id: 4,
      icon: '🌐',
      name: 'Global Services',
      description: 'Worldwide service provider',
      details: 'Delivering global solutions with local expertise and support.'
    }
  ]

  const wordIcons = [
    { id: 1, word: 'Innovation', icon: '💡' },
    { id: 2, word: 'Quality', icon: '⭐' },
    { id: 3, word: 'Excellence', icon: '🏆' },
    { id: 4, word: 'Trust', icon: '🤝' },
    { id: 5, word: 'Growth', icon: '📈' },
    { id: 6, word: 'Success', icon: '✨' }
  ]

  return (
    <div className="services-page">
      <Carousel />
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions tailored to your needs</p>
        </div>
      </section>
      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="clients-section">
        <div className="container">
          <h2 className="section-title">Our Clients</h2>
          <div className="clients-icon-grid">
            {clients.map((client) => (
              <ClientIcon key={client.id} client={client} />
            ))}
          </div>
        </div>
      </section>
      <section className="word-icons-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="word-icons-grid">
            {wordIcons.map((item) => (
              <WordIconCard key={item.id} word={item.word} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
