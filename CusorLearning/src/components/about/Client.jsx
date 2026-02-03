import './Client.css'

const Client = () => {
  const clients = [
    { 
      id: 1, 
      name: 'Client 1', 
      logo: 'https://via.placeholder.com/150/3498db/ffffff?text=Client+1',
      description: 'Leading technology solutions provider with innovative products and services.',
      industry: 'Technology'
    },
    { 
      id: 2, 
      name: 'Client 2', 
      logo: 'https://via.placeholder.com/150/e74c3c/ffffff?text=Client+2',
      description: 'Award-winning design agency specializing in digital transformation.',
      industry: 'Design'
    },
    { 
      id: 3, 
      name: 'Client 3', 
      logo: 'https://via.placeholder.com/150/2ecc71/ffffff?text=Client+3',
      description: 'Global finance company delivering exceptional customer experiences.',
      industry: 'Finance'
    },
    { 
      id: 4, 
      name: 'Client 4', 
      logo: 'https://via.placeholder.com/150/f39c12/ffffff?text=Client+4',
      description: 'Healthcare solutions provider committed to improving lives worldwide.',
      industry: 'Healthcare'
    }
  ]

  return (
    <section className="client-section">
      <div className="title-grid">
        <div className="container">
          <h2 className="section-title">Our Valued Clients</h2>
        </div>
      </div>
      <div className="description-grid">
        <div className="container">
          <p className="section-description">
            We are proud to work with industry leaders and innovative companies.
          </p>
        </div>
      </div>
      <div className="content-grid">
        <div className="container">
          <div className="clients-grid">
            {clients.map((client) => (
              <div key={client.id} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={client.logo} alt={client.name} />
                    <p>{client.name}</p>
                  </div>
                  <div className="flip-card-back">
                    <h3>{client.name}</h3>
                    <p className="industry">{client.industry}</p>
                    <p className="description">{client.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Client
