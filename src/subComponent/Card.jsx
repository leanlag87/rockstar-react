import React from 'react'

const Card = (props) => {
  return (
    <article className="cards__cards">
    <div className="cards__conteiner-img">
      <img className="cards__img" src={props.img} alt="Card-1" />
    </div>
    <div className="cards__cards-container-text">
      <div className="cards__cards-title">
        <h3 className="cards__title">
          {props.title + ''} <span>{props.span}</span>
        </h3>
      </div>
      <div className="cards__cards-description">
        <p className="cards__description">
         {props.description}
        </p>
      </div>
    </div>
  </article>
  )
}

export default Card