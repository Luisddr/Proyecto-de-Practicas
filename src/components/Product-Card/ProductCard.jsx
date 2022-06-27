import React from 'react';
import './product-card.styles.scss';
import Button from '../button/button.component'


function ProductCard({image, name, price}) {
    return (  
        <div className='product-card-container'>
            <img src={image} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add to card</Button>
        </div>
    );
}

export default ProductCard;