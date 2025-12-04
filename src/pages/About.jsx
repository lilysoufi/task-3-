
import History from "../components/History/History"
import Missions from "../components/Missions/Missions"
import TeamMembers from "../components/TeamMembers/TeamMembers"
import HeroTemplate from "../components/HeroTemplate/HeroTemplate"
import AwardsRecognitions from "../components/Awards/AwardsRecognitions"



const About = () => {
  return (
    <div>
     <HeroTemplate 
       section='Overview'
       title = 'Welcome to Little Learners Academy'
       desc='A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.'
     />
     <Missions />
     <AwardsRecognitions />
     <History />
     <TeamMembers />
    </div>
  )
}

export default About
