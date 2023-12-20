import React from 'react';
import './Error404.scss';
import { NavLink } from "react-router-dom";

//-->NotFound
const Error404 = ({imgError,textError,linkText}) => {
    return(
        <div className='error'> 
            <img src={imgError} className="error__logo" alt="Le nombre 404"/>
            <p className='error__text'>{textError}</p>
            <NavLink to="/" className="error__link">{linkText}</NavLink>
        </div>
    )
}

export default Error404
