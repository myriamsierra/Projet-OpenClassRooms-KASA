import React from 'react';
import './Cards-grid.scss'
import { NavLink } from "react-router-dom";
import AppartmentList from '../../../logement.json'
import Card from '../Card/Card.jsx'

//-->Home
const CardsGrid = () => {
    return (
        <div className='cards__grid'>
                {AppartmentList.map((appartment) => (
                     // On creer une card pour chaque element de la liste.chaque card est un lien de navigation vers le comp product (url=product+id de l'element)
                    <NavLink key={appartment.id} to={`/Products/${appartment.id}`} className='grid__item'>
                        <Card imgCard={appartment.cover} titleCard={appartment.title}/>
                    </NavLink>
                ))}
        </div>
    )
}

export default CardsGrid;




