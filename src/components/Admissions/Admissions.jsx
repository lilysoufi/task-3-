import AdmissionProcess from '../AdmissionProcess/AdmissionProcess'
import FeeStructure from '../FeeStructure/FeeStructure'
import HeroTemplate from '../HeroTemplate/HeroTemplate'
import SectionHeader from '../SectionHeader/SectionHeader'
import './Admissions.css'

const Admissions = () => {

  return (
    <div>
      <HeroTemplate 
      section='Admission'
      title="Join Our Family of Young Learners"
      desc="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />
      <AdmissionProcess />
      <FeeStructure />
    </div>
  )
}

export default Admissions
