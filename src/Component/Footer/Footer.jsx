import React from 'react';
import KasaLogoWhite from '../../Assets/kasa-logo-white.png'
import './Footer.scss'

//-->Path
const Footer = () => {
    return(
        <footer className="footer">
            <img src={KasaLogoWhite} className="footer__KasaLogo--white" alt="Le logo de Kasa version blanc"/>
            <div className='footer__text'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer