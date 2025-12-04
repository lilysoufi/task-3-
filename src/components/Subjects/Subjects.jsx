import SectionHeader from "../SectionHeader/SectionHeader"
import SubjectCard from "../SubjectCard/SubjectCard"
import './Subjects.css'


const Subjects = () => {
    let subjectsData = [ 
        {
            image : './img/language.png' ,
            title :'Language Arts' ,
            desc : 'Reading, writing, storytelling, and communication skills.'
        }
        ,
        {
            image : './img/math.png' ,
            title :'Mathematics' ,
            desc :'Number sense, basic operations, problem-solving, and logic.'
        }
        ,
        {
            image :'./img/science.png' ,
            title :'Science' ,
            desc :'Exploring the natural world through hands-on experiments and investigations.'
        }
        ,
        {
            image :'./img/socialstudies.png' ,
            title :'Social Studies' ,
            desc :'Cultivating an understanding of diverse cultures and communities.'
        }
        ,
        {
            image :'./img/craftsandarts.png' ,
            title :'Arts and Crafts' ,
            desc:'Encouraging creativity through various art forms and crafts.'
        }
        ,
        {
            image :'./img/gym.png' ,
            title :'Physical Education' ,
            desc :'Promoting physical fitness, coordination, and teamwork.'
        }
    ]
  return (
    <div>
      <SectionHeader 
      comment ='Our Features'
      title = 'What Students Learn'
      description = 'At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include'
      />

      <div className="subject-container">
         {subjectsData?.map((card) =>  {
            return (
                <SubjectCard 
                image = {card.image}
                title={card.title}
                desc ={card.desc}
                />
            )
         })}
      </div>
    </div>
  )
}

export default Subjects
