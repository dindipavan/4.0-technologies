import './index.css'

const TechnologiesCards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className, id} = cardDetails

  return (
    <li className="card-container {className}">
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="card-image" alt={title} />
      </div>
    </li>
  )
}

export default TechnologiesCards
