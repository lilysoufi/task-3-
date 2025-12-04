import ContactHero from "../components/ContactHero/ContactHero"


const Contact = () => {
    let contactData = [
        {
            image:"./img/email2.png",
            info :"hello@littlelearners.com"
        }
        ,
          {
            image:"./img/mobile.png",
            info :"+91 91813 23 2309"
        }
        ,
          {
            image:"./img/location2.png",
            info :"Somewhere in the World"
        }
        ,
          {
            image:"./img/clock.png",
            info :"Office Hours - 9am - 6 pm"
        }
    ]
  return (
    <div>
      <ContactHero 
      comment="Contact Us"
      title = "Feel Free To Connect With Us"
      desc ="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
      contactData={contactData}
      />

    </div>
  )
}

export default Contact
