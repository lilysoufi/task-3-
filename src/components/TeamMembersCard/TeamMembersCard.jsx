import './TeamMembersCard.css'

const TeamMembersCard = ({img1 , name , img2 , credenial, desc}) => {
  return (
    <div className='member-card'> 


      <div className='member-card-header'>
        <div className='memeber-card-profile'>
        <img src={img1} alt=''></img>
        <h2>{name}</h2>
        </div>

        <div className='member-card-email'><img src={img2} alt=''></img></div>
      </div>

      <div className='member-card-body'>
        <h5>{credenial}</h5>
        <p>{desc}</p>
      </div>


    </div>
  )
}

export default TeamMembersCard
