import './WordIconCard.css'

const WordIconCard = ({ word, icon }) => {
  return (
    <div className="word-icon-card">
      <div className="word-icon-circle">
        <div className="word-icon">{icon}</div>
      </div>
      <h3 className="word-text">{word}</h3>
    </div>
  )
}

export default WordIconCard
