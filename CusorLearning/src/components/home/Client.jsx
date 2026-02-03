import './Client.css'

const Client = () => {
  const clients = [
    { id: 1, name: 'Client 1', logo: 'https://via.placeholder.com/150/3498db/ffffff?text=Client+1' },
    { id: 2, name: 'Client 2', logo: 'https://via.placeholder.com/150/e74c3c/ffffff?text=Client+2' },
    { id: 3, name: 'Client 3', logo: 'https://via.placeholder.com/150/2ecc71/ffffff?text=Client+3' },
    { id: 4, name: 'Client 4', logo: 'https://via.placeholder.com/150/f39c12/ffffff?text=Client+4' },
    { id: 5, name: 'Client 5', logo: 'https://via.placeholder.com/150/9b59b6/ffffff?text=Client+5' },
    { id: 6, name: 'Client 6', logo: 'https://via.placeholder.com/150/1abc9c/ffffff?text=Client+6' }
  ]

  return (
    <section className="client-section">
      <div className="container">
        <h2 className="section-title">Our Clients</h2>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.id} className="client-card">
              <img src={client.logo} alt={client.name} />
              <p>{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Client
