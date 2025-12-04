import './FeaturesTemplate.css'

const FeaturesTemplate = ({image ,title , desc}) => {
  return (
    <div className='features-container'>
      
      <div className='feature-card'>
        <div className='feature-card-image'><img src={image} alt=''></img></div>
        <h2>{title}</h2>
        <p>{desc}</p>

      </div>
    </div>
  )
}

export default FeaturesTemplate
