import React, {useContext} from 'react';
import  './cardComponent.style.scss';
import {Link} from "react-router-dom";
import { DarkModeContext } from '../../context/dark-mode.context';



function CardComponent({id, image, categorie}) {

  const {theme} = useContext(DarkModeContext);

  const category = categorie.toLowerCase()
    return (  
      
        <div className="category-container">
        <div className="background-image" style={{backgroundImage:`url(${image})`}}/>
        {theme === ""?
        <div className="category-body-container">
          <Link to={`/shop/${category}`}>
          <h3 className='testing-category'>{categorie}</h3>
          </Link>
          <span>Shop Now</span>
        
        </div>

        :
        <div className="category-body-container-dark">
          <Link to={`/shop/${category}`}>
          <h3 className='testing-category'>{categorie}</h3>
          </Link>
          <span>Shop Now</span>
        
        </div>



        }
      </div>
        
    );
}

export default CardComponent;