import SectionHeader from '../SectionHeader/SectionHeader'
import './History.css'

const History = () => {
  return (
    <div>
      <SectionHeader 
      comment ='Our Progressive Journey'
      title ='Our History'
      description = 'Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment'
      />
      
      <div className='history-sequence-container'>

        <div class="sequence-line"></div>

          <div className='history-line'>
             <hr class="sequence-line-horizantal"></hr>
            <span class="circle-1"></span>
            <span class="circle-2"></span>
            <div className='history-year'>
                <img src='./img/history.png'></img>
                <h3>2023</h3>
            </div>
            <div className='history-title-desc'>
            <h4>Resilience and Future Horizons</h4>
            <p>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
            </div>

          </div>
          
          
          <div className='history-line'>
             <hr class="sequence-line-horizantal"></hr>
             <span class="circle-1"></span>
             <span class="circle-2"></span>
            <div className='history-year'>
                <img src='./img/history.png'></img>
                <h3>2017</h3>
            </div>
            <div className='history-title-desc'>
            <h4>Innovation and Technology</h4>
            <p>Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.</p>
            </div>

          </div>

          <div className='history-line'>
             <hr class="sequence-line-horizantal"></hr>
             <span class="circle-1"></span>
           <span class="circle-2"></span>
            <div className='history-year'>
                <img src='./img/history.png'></img>
                <h3>2012</h3>
            </div>
            <div className='history-title-desc'>
            <h4>Expansion and Recognition</h4>
            <p>These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.</p>
             </div>

          </div>

          <div className='history-line'>
             <hr class="sequence-line-horizantal"></hr>
             <span class="circle-1"></span>
           <span class="circle-2"></span>
            <div className='history-year'>
                <img src='./img/history.png'></img>
                <h3>2005</h3>
            </div>
            <div className='history-title-desc'>
            <h4>Inception and Growth</h4>
            <p>Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.</p>       
            </div>

          </div>

      </div>

    </div>
  )
}

export default History
