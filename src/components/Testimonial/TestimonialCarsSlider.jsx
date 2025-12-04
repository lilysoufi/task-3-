import React, { useState } from 'react';
import './TestimonialCardSlider.css';
import SectionHeader from '../SectionHeader/SectionHeader';


const TestimonialCardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
 
  
  let TestimonialData =[
        {
          id:1,
          image : "./img/girl.png"  ,
          name :"Jennifer B" ,
          rating : "./img/ratings.png",
          description : "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
        } 
        ,
        {
          id: 2,
          image : "./img/man.png"  ,
          name :"David K" ,
          rating : "./img/ratings.png",
          description :"Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
        }
        ,
        {
          id :3,
           image : "./img/child.png"  ,
          name :"Emily L" ,
          rating : "./img/ratings.png",
          description :"My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        }
        ,{
          id:1,
          image : "./img/girl.png"  ,
          name :"Lily S" ,
          rating : "./img/ratings.png",
          description : "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
        } 
    ]


  const nextCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === TestimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? TestimonialData.length - 1 : prevIndex - 1
    );
  };

  

  /*const goToCard = (index) => {
    setCurrentIndex(index);
  };*/

   

  return (
    <div className="testimionial-slider-container">
       <SectionHeader 
           comment ="Their Happy Words 🤗"
           title ="Our Testimonials"
           description ="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
           />
        <div className="card-slider-container">
      
      <div className="card-slider">
        <button className="slider-btn prev-btn" onClick={prevCard}><img src='./img/leftKey.png' alt=''></img></button>

        <div className="slider-track">
         
          <div className="card">
            <div className="card-image">
              <img src={TestimonialData[currentIndex]?.image} alt={TestimonialData[currentIndex].name} />
            </div>
            <div className="card-content">
              <h3>{TestimonialData[currentIndex]?.name}</h3>
              <img src={TestimonialData[currentIndex]?.rating}></img>
              <p>{TestimonialData[currentIndex]?.description}</p>
            </div>
          </div>
          </div>
        

        <button className="slider-btn next-btn" onClick={nextCard}><img src='./img/rightKey.png' alt=''></img></button>
         </div>
      </div>




    </div>
  


    
  
  );
};

export default TestimonialCardSlider;