import SectionHeader from '../SectionHeader/SectionHeader'
import './Missions.css'

const Missions = () => {
   
  return (
    <div>
      <SectionHeader 
      comment ='Mission & Visions'
      title ='Our Mission & Visions'
      description ='We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.'
      />
      
      <div className='mission-card-container'>
        <div className='mission-card'>
            <div className='card-title-icon'>
        <h2>Mission</h2>
        <img src='./img/mountain.png' alt=''></img>
        </div>
        <p>At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
        </div>
      
       
        <div className='mission-card'>
            <div className='card-title-icon'>
        <h2>Vision</h2>
        <img src='./img/googles.png' alt=''></img>
        </div>
        <p>Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.</p>
        </div>
      </div>

    </div>
  )
}

export default Missions
