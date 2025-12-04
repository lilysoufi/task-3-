import { useState } from 'react'
import './PictureGallery.css'

const PictureGallery = ({pictureData , name , desc}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
 

  

   const pictureNumber = 4
   const maxLength = pictureData.length - pictureNumber ;

  const prevPic = () => {
     setCurrentIndex(currentIndex === 0 ? maxLength : currentIndex - 1 );
  }

  const nextPic = () => {
     setCurrentIndex(currentIndex >= maxLength ? 0 : currentIndex + 1);
  }

 

  return (
    <div className='picture-gallery-container'>
      <div className='window' >
        <div className='picture-slide'>
        {pictureData?.map ((item) => {
            return (
                <img className='image-slide' 
                src={item.image}></img>
            )
        })}
        </div>
        </div>

        <div className='picture-gallery-info'>
           <div className='picture-gallery-header'>
          <h3>{name}</h3>
          <div className='picture-gallery-buttons'>
          <button onClick={prevPic}><img src='./img/leftKey.png'></img></button>
          <button onClick={nextPic}><img src='./img/rightKey.png'></img ></button>
          </div>
          </div>

          <p>{desc}</p>

        </div>
     
    </div>
  )
}

export default PictureGallery
