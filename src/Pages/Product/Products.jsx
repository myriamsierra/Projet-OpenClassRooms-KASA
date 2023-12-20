import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.scss';
import Carousel from '../../Component/Carousel/Carousel.jsx';
import ApartmentList from '../../logement.json';
import ItemsContenair from '../../Component/Product-items/Items-contenair/Items-contenair.jsx';
import Collapse from '../../Component/Collapse/Collapse.jsx';
import NotFound from '../NotFound/NotFound.jsx';

//-->Path
//-->CardsGrid(navlink)
const Products = () => {
    
    const {id} = useParams()
    //methode pour trouver l'element de la liste qui correspond au bon id (dans notre composant cardsgrid chaque cards recup l'id de l'element)
    const apartment = ApartmentList.find((apartment) => apartment.id === id)
    //si l'id ne correspond pas on return le comp NotFound
    if (!apartment){
        return < NotFound /> 
    }
    
    const CollapseText = [
        { label: 'Description', text: apartment.description },
        { label: 'Equipement', text: apartment.equipments },
    ]

    return (
        <main className='product__contenair'>
            <section className='product__contenair--carousel'>
                <Carousel images={apartment.pictures}/>
            </section>
            <section className='product__contenair--items'>
                <ItemsContenair apartment={apartment}/>
            </section>
            <section className="product__contenair--collapse">
                {CollapseText.map((item,index) => (
                    <Collapse className='collapse--product' key={index} title={item.label} description={item.text}/>
                ))}
            </section>
        </main>
      ) 
}

export default Products

