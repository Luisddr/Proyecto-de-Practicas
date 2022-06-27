import React, { useContext } from 'react';
import ProductCard from '../../components/Product-Card/ProductCard';
import { ProductsContext } from '../../context/products.context';
import './shop.styles.scss'

export default function Shop(){

    const {products} = useContext(ProductsContext)

    return(

        <div className='products-container'>
            {products && products.map(p=>(
                <ProductCard key={p.id} name={p.name} price={p.price}
                    image={p.imageUrl}
                />
            ))}
        </div>
    )

}