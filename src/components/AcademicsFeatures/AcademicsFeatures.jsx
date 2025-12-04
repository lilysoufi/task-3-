import FeaturesTemplate from "../FeaturesTemplate/FeaturesTemplate"
import SectionHeader from "../SectionHeader/SectionHeader"
import './AcademicsFeatures.css'


const AcademicsFeatures = () => {
  let featuresData =[
    {
        image :'./img/feauterbook.png' ,
        title : 'Thematic Learning' ,
        desc : 'Our curriculum is centered around engaging themes that capture children\'s imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.'
    }
    ,
    {
        image : './img/featureunion.png' ,
        title : 'STEAM Education' ,
        desc : 'We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.'
    }
    ,
    {
         image : './img/featurepuzzle.png' ,
         title : 'Language Immersion' ,
         desc : 'Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.'
    }
    ,
    {
        image : './img/brush.png' ,
        title : 'Art and Creativity' ,
        desc :'Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.'
    }
    ,
    {
        image: './img/sun.png' ,
        title : 'Outdoor Education' ,
        desc :'Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.'
    }
    ,
    {
        image :'./img/star.png' ,
        title : 'Play-Based Learning' ,
        desc : 'Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.'
    }
  ]
  return (
    <div>
      <SectionHeader 
      comment ='Our Features'
      title ='Our Special Features'
      description ='Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!'
      />

      <div className="academics-feature-container">
      {featuresData?.map((card) =>  {
        return (
           <FeaturesTemplate
           image={card.image}
           title={card.title}
           desc={card.desc}
            />
        )
      })}
      </div>
      
    </div>
  )
}

export default AcademicsFeatures
