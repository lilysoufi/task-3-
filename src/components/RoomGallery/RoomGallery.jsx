import { useState } from 'react'
import PictureGallery from '../PictureGallery/PictureGallery'
import SectionHeader from '../SectionHeader/SectionHeader'
import './RoomGallery.css'


const RoomGallery = () => {
    const [activeCatagory , setActiveCatagory] = useState("all");
    
    /*const catagories =['all' , 'classroom' , 'library' , ' science' , 'computer' ,'nature'] */
    
    let classroomPic = [
        {
            image :'./img/classroom1.png'
        }
        ,
        {
            image : './img/classroom2.png'
        }
        ,
        {
            image :'./img/classroom3.png'
        }
        ,
        {
            image :'./img/classroom4.png'
        }
        ,
         {
            image : './img/library1.png'
        }
        ,
         {
            image : './img/library2.png'
        }
    ]
   

    let libraryData =[
        {
            image : './img/library1.png'
        }
        ,
         {
            image : './img/library2.png'
        }
        ,
         {
            image : './img/library3.png'
        }
        ,
         {
            image : './img/library4.png'
        }

    ]

    let sciencePic = [
        {
            image :'./img/science1.png'
        }
        ,
         {
            image :'./img/science2.png'
        }
        ,
         {
            image :'./img/science3.png'
        }
        ,
         {
            image :'./img/science4.png'
        }
    ]
    let computerPic =[
        {
            image : './img/computer1.png'
        }
        ,
        {
            image : './img/computer2.png'
        }
        ,
        {
            image : './img/computer3.png'
        }
        ,
        {
            image : './img/computer4.png'
        }
    ]
    let naturePic = [
        {
            image :'./img/nature1.png'
        }
        ,
        {
            image :'./img/nature2.png'
        }
        ,
        {
            image :'./img/nature3.png'
        }
        ,
        {
            image :'./img/nature4.png'
        }
    ]
   let galleryData = [
    {
        image : classroomPic ,
        name : 'Classrooms' ,
        catagory :'classroom' ,
        desc :'Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.'

    }
    ,
    {
        image : libraryData ,
        name : 'Library' ,
        catagory :'library',
        desc :'Our expansive library is a treasure trove of books, fostering a love for reading and supporting students literacy development.'
    }
    ,
    {
       image : sciencePic ,
       name : 'Science Lab' ,
       catagory : 'science' ,
       desc :'Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.'
    }
    ,
     {
       image : computerPic ,
       name : 'Computer Lab' ,
       catagory : 'computer' ,
       desc :'Equipped with age-appropriate technology, the computer lab enhances students\' digital literacy and computational skills'
    }
    ,
    {
        image : naturePic ,
        name :'Garden and Nature Area',
        catagory : 'nature' ,
        desc :'Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.'
    }
   ]


const filteredGallery = activeCatagory === 'all' ? galleryData : galleryData.filter(item => item.catagory === activeCatagory);

return (
    <div className='gallery-container'>

        <SectionHeader 
        comment = 'Our Gallery'
        title = 'Our Rooms Gallery'
        description = 'Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.'
        />

        <div className='gallery-buttons'>
        <button onClick={() => setActiveCatagory("all")}>All</button>
        <button onClick={() => setActiveCatagory("classroom")}>Classrooms</button>
        <button onClick={() => setActiveCatagory("library")}>Library</button>
        <button onClick={() => setActiveCatagory("science")}>Science Lab</button>
        <button onClick={() => setActiveCatagory("computer")}>Computer Lab</button>
        <button onClick={() => setActiveCatagory("nature")}>Garden and Nature Area</button>

        </div>



       {filteredGallery?.map((gallery) => {
         return (
            <PictureGallery
            catagory = {gallery.catagory}
            pictureData ={gallery.image}
            name = {gallery.name}
            desc ={gallery.desc}
            />
         )
    })}


    </div>
  )
}

export default RoomGallery
