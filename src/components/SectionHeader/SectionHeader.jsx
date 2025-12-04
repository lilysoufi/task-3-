import './SectionHeader.css'

const SectionHeader =(props) => {

    return (
        <div>
           <div className='section'>
            <div div className='section-header'>
                <h6>{props.comment}</h6>
                <h2>{props.title}</h2>
                
                <p>{props.description}</p>
              
          </div>  
        </div>
        </div>
    )
}

export default SectionHeader