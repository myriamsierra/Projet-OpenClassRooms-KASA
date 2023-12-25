import React from 'react';
import './Banner.scss';



//-->Home+About
const Banner = ({ imgBanner,showTitleBanner}) => {
    return (
        <div className='banner'>
            <div className='banner__overlay'></div>
            {showTitleBanner && (
                <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
            )}
            <img src={imgBanner} className="banner__img" alt="paysage" />
        </div>
    )
}

export default Banner
