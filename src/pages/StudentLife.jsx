import EventsAndCelebrations from "../components/EventsAndCelebrations/EventsAndCelebrations"
import HeroTemplate from "../components/HeroTemplate/HeroTemplate"
import StudentsExrtaActivities from "../components/StudentsExtraActivities/StudentsExtraActivities"
import StudentSupport from "../components/StudentSupport/StudentSupport"


const StudentLife = () => {
    let specialStudentsData =[
        {
          image : "./img/lightning.png"  ,
          title : "Sports and Athletics" ,
          desc : "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."
        }
        ,
        {
          image : "./img/brush.png"  ,
          title : "Art and Creativity" ,
          desc : "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms."
        }
        ,
        {
          image : "./img/music.png"  ,
          title : "Music and Performing Arts" ,
          desc : "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances."
        }
        ,
        {
          image : "./img/featurepuzzle.png"  ,
          title : "Language Clubs" ,
          desc : "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness."
        }
        ,
        {
          image : "./img/lab.png"  ,
          title : "Science Club" ,
          desc : "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning."
        }
        ,
        {
          image : "./img/sparkels.png"  ,
          title : "Cooking and Culinary Arts" ,
          desc : "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals."
        }
    ]
    let EventsData = [
        {
            image : "./img/sports.png",
            title : "Annual Sports Day" ,
            desc : "A day filled with friendly competition, team spirit, and sportsmanship."
        }
        ,
         {
            image : "./img/haloween.png",
            title : "Cultural Festivals" ,
            desc : "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation."
        }
        ,
         {
            image : "./img/drawing.png",
            title : "Art Exhibitions" ,
            desc : "Showcasing our students' artistic talents through exhibitions and displays."
        },
         {
            image : "./img/sciencefair.png",
            title : "Science Fair" ,
            desc : "A platform for budding scientists to present their innovative projects and experiments."
        }
        ,
         {
            image : "./img/internationalday.png",
            title : "International Day" ,
            desc : "A vibrant celebration of our diverse community, embracing cultures from around the world."
        }
        ,
         {
            image : "./img/gradution.png",
            title : "Graduation Ceremony" ,
            desc : "A significant milestone as our Kindergarten students prepare to embark on their academic journey."
        }
    ]
    let supportData = [
      {
        image : "./img/lightbulb.png" ,
        title : "Counseling" ,
        desc :"Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
      }
      ,
      {
        image : "./img/feauterbook.png" ,
        title : "Learning Support" ,
        desc :"Our educators provide additional assistance to students who may require extra support in their academic journey.",
      }
      ,
      {
        image : "./img/parents.png" ,
        title : "Parent-Teacher Collaboration" ,
        desc :"We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
      }
    ]
  return (
    <div>
      <HeroTemplate
      section = "Enriching Student Life"
      title ="Embracing Learning with Discovery and Joy"
      desc ="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
       />
  
      <StudentsExrtaActivities studentfeatures={specialStudentsData}/> 
      <EventsAndCelebrations EventData={EventsData} />
      <StudentSupport supportData={supportData} />
    </div>
  )
}

export default StudentLife
