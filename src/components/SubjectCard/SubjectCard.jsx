import './SubjectCard.css'

const SubjectCard = ({image , title , desc}) => {
  return (
    <div className='subject-card'>
        <div className='subject-decoration'></div>
        <div className='subject-info'>
        <img src={image}></img>
        
        <h3>{title}</h3>
        <p>{desc}</p>
        </div>
      
    </div>
  )
}

export default SubjectCard
