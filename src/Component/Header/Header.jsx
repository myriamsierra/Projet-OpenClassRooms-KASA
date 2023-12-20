import React from 'react';
import LogoKasaColor from '../../Assets/kasa-logo-color.png'
import './Header.scss'
import { NavLink } from "react-router-dom";

//-->Path
const Header = () => {
    return(
        <header className='header'>
            <img src={LogoKasaColor} className="header__logo--color" alt="Le logo de Kasa"/>
            <nav >
                <ul className='header__navBar'>
                    <li><NavLink to="/" className='navBar__link'>Accueil</NavLink></li>
                    <li><NavLink to='About' className='navBar__link'> A propos</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header