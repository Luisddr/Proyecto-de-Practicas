import React from 'react';
import  './cardComponent.style.scss'
import {Link} from "react-router-dom"


function CardComponent({id, image, categorie}) {

  const category = categorie.toLowerCase()
    return (  
        <div className="category-container">
        <div className="background-image" style={{backgroundImage:`url(${image})`}}/>
        <div className="category-body-container">
          <Link to={`/shop/${category}`}>
          <h3>{categorie}</h3>
          </Link>
          <span>Shop Now</span>
        
        </div>
      </div>
        
    );
}

export default CardComponent;