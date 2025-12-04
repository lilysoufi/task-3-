import './EventCard.css'

const EventCard = ({image , title , desc}) => {
  return (
    <div className='event-card'>
        <div className='event-decoration'></div>
        <div className='event-info'>
        <img src={image}></img>
        
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
      
    </div>
  )
}

export default EventCard
