import './BenefitCard.css/'

const BenefitCard = (props) => {

    return (
        <div className='benefit-card'>
              <div className='benefit-card-img'><img src={props.image} alt=''></img> </div>
            <div className='benefit-card-info'>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            </div>
        </div>
    )
}

export default BenefitCard