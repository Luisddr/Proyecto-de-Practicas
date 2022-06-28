import React from 'react';
import './bag-items.styles.scss'

function BagItems({name, quantity, image, price }) {
    return (
        <div  className="cart-item-container">
            <img src={image} alt={`${name}`} />
                <div className='.item-details'>
                <span className='name'>{name}</span> <br />
                <span className='price'>{quantity} x ${price}</span>

                </div>
              </div>
      );
}

export default BagItems;