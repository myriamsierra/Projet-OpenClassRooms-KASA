import React from 'react';
import './Banner.scss';

//-->Home+About
const Banner = ({ imgBanner,titleBanner}) => {
    return (
        <div className='banner'>
            <div className='banner__overlay'></div>
            <h1 className='banner__title'>{titleBanner}</h1>
            <img src={imgBanner} className="banner__img" alt="paysage" />
        </div>
    )
}

export default Banner
