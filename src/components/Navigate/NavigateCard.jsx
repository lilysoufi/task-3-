import './NavigateCard.css'

const NavigateCard = (props) => {

    return (
        <div className="navigate-card">
            <h2>{props.title}</h2>
            <img src={props.image} alt=''></img>
            <p>{props.description}</p>
            <button>Learn more <img src ="./img/blackarrow.png" alt =''></img></button>
          </div>
    )
}

export default NavigateCard