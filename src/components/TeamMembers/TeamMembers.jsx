import SectionHeader from '../SectionHeader/SectionHeader'
import TeamMembersCard from '../TeamMembersCard/TeamMembersCard'
import './TeamMembers.css'

const TeamMembers = () => {
  let teamData = [
    {
      img1 : './img/team1.png' ,
      name : 'Ms. Sarah Anderson' ,
      img2 : './img/teamemail.png' ,
      credential : 'Qualification:Bachelor\'s Degree in Early Childhood Education',
      description : 'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.'
    }
    ,
    {
      img1 : './img/team2.png' ,
      name : 'Mr. David Roberts' ,
      img2 : './img/teamemail.png' ,
      credential : 'Qualification: Master\'s Degree in Elementary Education',
      description :'With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.'
    }
    ,
    {
      img1 : './img/team3.png' ,
      name : 'Ms. Emily Hernandez' ,
      img2 : './img/teamemail.png' ,
      credential : 'Qualification: Diploma in Child Psychology',
      description :'Ms. Emily\'s expertise in child psychology enables her to understand each child\'s unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.'
    }
    ,
    {
      img1 : './img/team4.png' ,
      name : 'Mr. Michael Turner' ,
      img2 : './img/teamemail.png' ,
      credential : 'Qualification: Bachelor\'s Degree in Physical Education',
      description :'Mr. Michael\'s passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.'
    }
    ,
    {
      img1 : './img/team5.png' ,
      name : 'Ms. Jessica Lee' ,
      img2 : './img/teamemail.png' ,
      credential : 'Qualification: Master\'s Degree in Special Education',
      description :'Ms. Jessica\'s specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.'
    }
    ,
    {
      img1 : './img/team6.png' ,
      name : 'Mr. William Parker' ,
      img2 : './img/teamemail.png' ,
      credential : 'Qualification: Bachelor\'s Degree in Fine Arts',
      description :'Mr. William\'s background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.'
    }
  ];
  return (
    <div>
        <SectionHeader 
         comment = 'Our Teachers With Experties'
         title ='Our Team Members'
         description ='At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.'
        />
        
        <div className='team-card-container'>
        {teamData?.map((card) => {
          return (
            <TeamMembersCard 
               img1 = {card.img1}
               name = {card.name}
               img2={card.img2}
               credenial={card.credential}
               desc={card.description}
            />
          )
        })}
        </div>
       
    </div>
  )
}

export default TeamMembers
