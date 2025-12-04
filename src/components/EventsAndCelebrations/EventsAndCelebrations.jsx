import SectionHeader from "../SectionHeader/SectionHeader"
import EventCard from "./EventCard"
import './EventsAndCelebrations.css'

const EventsAndCelebrations = ({EventData}) => {
  return (
    <div>
      <SectionHeader 
      comment ='Our Features'
      title ="Events & Celebrations"
      description = "At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
      />
      <div className="event-container">
      {EventData.map((event) => {
        return (
          <EventCard 
          image={event.image}
          title={event.title}
          desc= {event.desc}
          />
        )
      } )}
      </div>
    </div>
  )
}

export default EventsAndCelebrations
