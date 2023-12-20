import React from 'react';
import Banner from './../../Component/Banner/Banner.jsx';
import HomeBanner from './../../Assets/home-banner.png'
import './Home.scss';
import CardsGrid from'../../Component/Cards-contenairs/Cards-grid/Cards-Grid.jsx';


//-->Path
const Home = () => {
    
    const titleForBanner = "Chez vous, partout et ailleurs";
   
    return (
        <main className='home__contenair'>
            <section className='home__section--banner'>
                <Banner imgBanner={HomeBanner} titleBanner={titleForBanner} />
            </section>
            <section className='home__section--cardsGrid'>
                <CardsGrid />
            </section>
        </main>
    )
}

export default Home