import FeaturesTemplate from "../FeaturesTemplate/FeaturesTemplate"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./StudentSupport.css"

const StudentSupport = ({supportData}) => {
  return (
    <div>
      <SectionHeader 
      comment="Our Achievements"
      title="Student Support"
      description ="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
      />
      <div className="supoort-data-container">
      {supportData.map((support) => {
        return (
             <FeaturesTemplate 
             image = {support.image}
             title = {support.title}
             desc = {support.desc}
             />
        )
      })}
      </div>
     
    </div>
  )
}

export default StudentSupport
