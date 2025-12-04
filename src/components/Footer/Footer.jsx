import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
      <div className='footer-right'>
       <div>
        <div className='footer-logo'>
       <img className='little' src="./img/shape-14.png" alt=""></img>
       <img src="./img/LittleLearners.png" alt=""></img>
         </div>
       <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
        </div>


        <div className='footer-contanct'>
           <div className='email'>
            <img src="./img/Email.png" alt=""></img>
            <h6>hello@littlelearners.com</h6>
            </div>
            <div className='phone'>
            <img src="./img/phone.png" alt=""></img>
            <h6>+91 91813 23 2309</h6>
            </div>
            <div className='location'>
            <img src="./img/location.png" alt=""></img>
            <h6>Somewhere in the World</h6>
            </div>
        </div>
        </div>
        <div className="footer-pages-summary">
           <div>
              <h5>Home</h5>
              <p>Features</p>
              <p>Our Testimonials</p>
              <p>FAQ</p>
           </div>
           <div>
              <h5>About Us</h5>
              <p>Our Mission</p>
              <p>Our Vision</p>
              <p>Awards and Recognitions</p>
              <p>History</p>
              <p>Teachers</p>
           </div>
           <div>
              <h5>Academics</h5>
              <p>Special Features</p>
              <p>Gallery</p>
           </div>
           <div>
              <h5>Contact Us</h5>
              <p>Information</p>
              <p>Map & Direction</p>
           </div>
        </div>
        </div>
        <div className='footer-copyright'>
            <div className='footer-policy-social'> 
               <div className='footer-policy'>
               <p>Terms of Service</p>
               <p>Privacy Policy</p>
               <p>Cookie Policy</p>
                </div>
                <div className='social-logo'>
               <img src='./img/facebook.png' alt=''></img>
               <img src='./img/x.png' alt=''></img>
               <img src='./img/linkdin.png' alt=''></img>
               </div>
            </div>
          <p className='copyright'>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
        </div>

    </div>
  )
}

export default Footer
