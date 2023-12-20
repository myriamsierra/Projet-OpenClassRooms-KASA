import React from 'react';
import './Cards.scss'

//--->Card-Grid
const Card = ({imgCard,titleCard}) => {
    return (
        <div className='card'>
            <div className="card__overlay"></div> 
            <img className="card__img" src={imgCard} alt={titleCard}/>
            <h2 className='card__title'>{titleCard}</h2>
        </div>
    )
}

export default Card;


