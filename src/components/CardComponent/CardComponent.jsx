import React from 'react';
import  './cardComponent.style.scss'


function CardComponent({id, image, categorie}) {
    return (  
        <div className="category-container">
        <div className="background-image" style={{backgroundImage:`url(${image})`}}/>
        <div className="category-body-container">
          <h3>{categorie}</h3>
          <span>Shop Now</span>
        
        </div>
      </div>
        
    );
}

export default CardComponent;