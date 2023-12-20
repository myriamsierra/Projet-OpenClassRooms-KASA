import React from 'react';
import Host from '../Items/Host/Host.jsx'
import Rate from '../Items/Rate/Rate.jsx'
import Tags from '../Items/Tags/Tags.jsx'
import Title from '../Items/Title/Title.jsx'
import './Items-contenair.scss'

//-->Product
const ItemsContenair = ({ apartment}) =>{
    return(
        <div className='Items__details'>
            <div className='Items__details__title'>
                <Title title={apartment.title} location={apartment.location} />
                <Tags tags={apartment.tags}/>
            </div >
            <div className='Items__details__host'>
                <Host host={apartment.host} />
                <Rate iconStarNumber={apartment.rating} />
            </div>     
        </div>
    )
}

export default ItemsContenair