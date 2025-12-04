import AcademicsFeatures from "../components/AcademicsFeatures/AcademicsFeatures"
import HeroTemplate from "../components/HeroTemplate/HeroTemplate"
import RoomGallery from "../components/RoomGallery/RoomGallery"
import Subjects from "../components/Subjects/Subjects"


const Academics = () => {
  return (
    <div>
      <HeroTemplate 
      section='Academics'
      title='Nurturing Young Minds for Success'
      desc='Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school s academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.'
      />
      <AcademicsFeatures />
      <Subjects />
     <RoomGallery />
     
      
    </div>
  )
}

export default Academics
