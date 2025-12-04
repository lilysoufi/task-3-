import { useState } from 'react';
import './AwardsRecognitions.css'
import AwardsCard from '../AwardsCard/AwardsCard';
import SectionHeader from '../SectionHeader/SectionHeader';

const AwardsRecognitions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    let awardsData =[
    {
      image : './img/awards1.png',
      title : 'Outstanding Early Childhood Education Award' ,
      desc :'Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy\'s commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.'
    }
    ,
    {
      image : './img/awards2.png' ,
      title :'Innovative STEAM Education Award' ,
      desc:'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.'
    }
    , 
    {
      image :'./img/awards3.png' ,
      title :'Environmental Stewardship Award' ,
      desc :'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.'
    }
    ,
    {
      image :'./img/star.png' ,
      title : 'Outstanding Educational Staff' ,
      desc : 'Received from the Education Excellence Association '
    }
    ,
    {
      image :'./img/feauterbook.png',
      title :'Creative Learning Methods ' ,
      desc: 'Awarded by National Association for the Education of Special Needs Children'
    }
    ,
    {
      image : './img/awards1.png',
      title : 'Outstanding Early Childhood Education Award' ,
      desc :'Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy\'s commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.'
    }
    ,
    {
      image : './img/awards2.png' ,
      title :'Innovative STEAM Education Award' ,
      desc:'Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.'
    }
    , 
    {
      image :'./img/awards3.png' ,
      title :'Environmental Stewardship Award' ,
      desc :'Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.'
    }
    ,
    {
      image :'./img/star.png' ,
      title : 'Outstanding Educational Staff' ,
      desc : 'Received from the Education Excellence Association '
    }
    ,
    {
      image :'./img/featureunion.png',
      title :'Creative Learning Methods ' ,
      desc: 'Awarded by National Association for the Education of Special Needs Children'
    }
    ,
    {
      image :'./img/featurepuzzle.png' ,
      title : 'Outstanding Educational Staff' ,
      desc : 'Received from the Education Excellence Association '
    }


  ]

   const cardsNumber = 3
   const cardsLeft = 8
   const maxLength = awardsData.length - cardsNumber ;

   const nextSlide = () => {
     setCurrentIndex(currentIndex >= maxLength ? 0 : currentIndex + 1);
     cardsLeft = awardsData.length - (currentIndex + cardsNumber) ;
   }

   const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? maxLength : currentIndex - 1 );
   }

   

   const visibleCards = awardsData.slice(currentIndex , currentIndex + cardsNumber);

  return (
    <div className='awards-recognitions-container'>

      <SectionHeader 
       comment ="Our Achievements"
       title = "Our Awards and Recognitions"
       description ="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      
      <div className='awards-buttons-container' > 



      <div className='awards-slider-panel'>

        <div className='awards-slider-container'>

          <div className='awards-slider'>
          {visibleCards?.map(award => {
             return(
              <div className='award-slide'>
              <AwardsCard
              image = {award.image}
              title={award.title}
              desc ={award.desc}

            />
            </div>
            )
          })}
          </div>
         </div>
         </div>

          
      <div className='awards-panel'>

      <h6>{cardsLeft} more Awards</h6>

      <div className='awards-panel-buttons'>
      <button onClick={prevSlide}><img src='./img/leftKey.png'></img></button>
      <button onClick={nextSlide}><img src='./img/rightKey.png'></img></button>
      </div>

      </div>

        

      

    </div>
    </div>
  )
}

export default AwardsRecognitions
