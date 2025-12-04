import './HeroTemplate.css'

const HeroTemplate = ({section , title , desc}) => {
  return (
    <div className="about-hero">
      
      <img className='about-hero-icon'src="./img/aboutHero.png"></img>
      <div className='about-hero-title'>
      <h6>{section}</h6>
      <h2>{title}</h2>
      </div>
      <p>{desc}</p>
    </div>
  )
}

export default HeroTemplate
