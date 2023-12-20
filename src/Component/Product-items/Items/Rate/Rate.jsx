import React from 'react';
import './Rate.scss';
import GrayStar from './../../../../Assets/star-grey.png';
import ColorStar from './../../../../Assets/star-color.png'

//-->ItemsContenair
const Rate = ({ iconStarNumber }) => {
    return (
      <div className="rate">
        {/* //on indique qu'il y a 5 element dans notre tableau */}
        {Array.from({ length: 5 }, (item, index) => (
          <img
            key={index}
            // si la valeur de iconStarNumber est sup a la valeur de l'index (donc 5) tu importe Colorstar sinon tu importe ColorGrey
            src={index < iconStarNumber ? ColorStar : GrayStar}
            alt={`étoile`}
          />
        ))}
      </div>
    )
  }
  
export default Rate



