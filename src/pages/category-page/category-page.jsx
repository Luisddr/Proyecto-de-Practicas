import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import {ProductsContext} from '../../context/products.context'
import ProductCard from '../../components/Product-Card/ProductCard';
import './category-page.styles.scss'

function CategoryPage() {

    const { products } = useContext(ProductsContext);

    const {title} = useParams()

    return (
        <>
        <h2 style={{textTransform:"upperCase"}}>{title}</h2>
        <div className="products-container">

        {products[title].map(p=>(
            <ProductCard key={p.id} name={p.name} image={p.imageUrl} price={p.price} id={p.id} />
            ))
            
            
        }
        </div>
        </> 

     );
}

export default CategoryPage;