import './AdmissionCard.css'

const AdmissionCard = ({number , title , desc}) => {
  return (
    <div className='admission-card'>
      <h3 className='admission-card-number'>{number}</h3>
      <div className='admission-card-title-desc'>
      <h2 className="admission-card-title">{title}</h2>
      <p className='admission-card-info'>{desc}</p>
      </div>
    </div>
  )
}

export default AdmissionCard
