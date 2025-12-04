import FeaturesTemplate from "../FeaturesTemplate/FeaturesTemplate"
import SectionHeader from "../SectionHeader/SectionHeader"
import './StudentsExtraActivities.css'

const StudentsExrtaActivities = ({studentfeatures}) => {
  return (
    <div>
      <SectionHeader 
      comment ="Our Features"
      title ="Extracurricular Activities"
      description="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
      />
      <div className="student-feature-container">
      {studentfeatures.map((feature) => {
        return (
          <FeaturesTemplate 
          image={feature.image}
          title={feature.title}
          desc={feature.desc}
          />
        )
      })}
      </div>
    </div>
  )
}

export default StudentsExrtaActivities
