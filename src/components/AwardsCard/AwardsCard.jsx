import './AwardsCard.css'

const AwardsCard = ({image ,title , desc}) => {
  return (
    <div className="awards-card">
        <div className="awards-image"><img src={image}></img> </div>
        <h3 className="awards-title">{title}</h3>
        <p className="awards-description">{desc}</p>
    </div>
  )
}

export default AwardsCard
