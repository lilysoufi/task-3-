import './ContactHero.css'

const ContactHero = ({comment, title , desc , contactData}) => {
  return (
    <div>
          <div className='contact-hero-section'>
            <img className='contact-hero-icon'src="./img/aboutHero.png"></img>
            <div div className='contact-hero-title'>
                <h6>{comment}</h6>
                <h2>{title}</h2>
                </div>
                <div>
                <p>{desc}</p>
                <div className='contact-container'>
                {contactData.map((contact) => {
                    return (
                        <div className='contact-img-title'>
                            <img id='contact-img' src={contact.image}></img>
                            <h6>{contact.info}</h6>
                        </div>
                    )
                })}
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContactHero
