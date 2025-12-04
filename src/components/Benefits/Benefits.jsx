import BenefitCard from '../BenefitCard/BenefitCard'
import './Benefits.css/'
import Container from '../Container/Container'
import SectionHeader from '../SectionHeader/SectionHeader'

function Benefits () {
    let cardsData =[
        {
         image : "./img/Icon(1).png" ,
         title : "Holistic Learning Approach" ,
        description :"Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." 
        }    
      ,
      {
         image :"./img/Icon(2).png" ,
         title : "Experienced Educators" ,
         description : "Our passionate and qualified teachers create a supportive and stimulating learning environment."
                
      }    
      ,
      {
         image:"./img/Icon(3).png" ,
         title : "Nurturing Environment" ,
         description :  "We prioritize safety and provide a warm and caring atmosphere for every child." 
                
      }
      ,
      {
         image :"./img/Icon(4).png" ,
         title : "Play-Based Learning" ,
         description : "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
                
      }
      ,
      {
         image :"./img/Icon(5).png" ,
         title : "Play-Based Learning" ,
         description : "Our small class sizes enable personalized attention, catering to each child's unique needs."
              
      }
      ,
      {
         image: "./img/Icon(6).png" ,
         title : "Parent Involvement" ,
         description :"We foster a strong parent-school partnership to ensure seamless communication and collaboration."    
                
      }

    ]

    return (
        <div className='benefit-container'>
            <SectionHeader 
                comment ="Children Deserve Bright Future"
                title ="Our Benefits"
                description ="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
            />
          <div className='benefit-card-container'>
            
            {cardsData?.map((cardData) => {
                return (
                    <BenefitCard 
                    image={cardData.image}
                    title = {cardData.title}
                    description = {cardData.description}
                    />
                )
            })}
            
            </div>

            

       </div>
    )
}

export default Benefits