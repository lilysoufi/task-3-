import "./Hero.css"

function Hero () {
    return (
      <div className="hero-card">
          <img src="/img/ImageContainer.png"></img>
          <div className="hero-card-right">
            <div className="hero-card-title">
            <h5>Welcome to Little Learners Academy</h5>
            <h1>Where Young Minds Blossom and Dreams Take Flight. </h1>
            </div>
            <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            <div className="hero-card-statics"> 
                <div>
                    <h2>+7000</h2>
                    <h6>students passed out</h6>
                </div>
                <div>
                    <h2>+37</h2>
                    <h6>Awards & Recognitions</h6>
                </div>
                <div>
                    <h2>+15</h2>
                    <h6>Experience Educators</h6>
                </div>
            </div>
          </div>
      </div>
    )
}

export default Hero