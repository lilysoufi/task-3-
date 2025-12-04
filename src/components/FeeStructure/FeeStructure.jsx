import SectionHeader from "../SectionHeader/SectionHeader"
import ProgramFee from "./programFee"


const FeeStructure = () => {
    let heading = ["Program" , "Age Group" , "Annual Tuition" , "Registration Fee" , "Activity Fee"] 
    let body = [
        {
            program :'Nursery' ,
            ageGroup :'2 - 3 Years' ,
            anuualTuition :'$1,686' ,
            registrationFee :'$162' ,
            activityFee :'$12'
        }
        ,
          {
            program :'Pre - Kindergartens' ,
            ageGroup :'3 - 4 Years' ,
            anuualTuition :'$2,686' ,
            registrationFee :'$220' ,
            activityFee :'$16'
        }
        ,
          {
            program :'Kindergarten' ,
            ageGroup :'4 - 5 Years' ,
            anuualTuition :'$3,686' ,
            registrationFee :'$340' ,
            activityFee :'$20'
        }
    ]
    let body2 = [
        ['Nursery' ,'2 - 3 Years','$1,686' ,'$162' ,'$12'] ,
        ['Pre - Kindergartens' ,'3 - 4 Years' ,'$2,686' ,'$220' ,'$16']
    ]
  return (
    <div>
      <SectionHeader 
      comment= 'Our Features'
      title ="Fee Structure"
      description ='Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.'
      
      />
     
    </div>
  )
}

export default FeeStructure
