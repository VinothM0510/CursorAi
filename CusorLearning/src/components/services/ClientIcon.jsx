import './ClientIcon.css'

const ClientIcon = ({ client }) => {
  return (
    <div className="client-icon-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="client-icon">{client.icon}</div>
          <h3>{client.name}</h3>
        </div>
        <div className="flip-card-back">
          <h3>{client.name}</h3>
          <p className="client-description">{client.description}</p>
          <p className="client-details">{client.details}</p>
        </div>
      </div>
    </div>
  )
}

export default ClientIcon
