import React, {useContext, useEffect} from "react";
import Button from "../button/button.component";
import "./bag-dropdown.styles.scss";
import {ToggleContext} from '../../context/toggle.context'
import BagItems from "../bag-items/bag-items";
import {Link} from "react-router-dom"


function DropdownBag() {


  const {currentItems} = useContext(ToggleContext)

  
    // if(currentItems.length){
    //     let elementsToReduce = currentItems.map(c=>c.quantity);
    //     let aux = elementsToReduce.reduce((prevVal, currentVal)=>prevVal + currentVal,0);
    //     setItemsCount(aux)
    // }
  

  


  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" >
            {currentItems.length ? currentItems.map(i=>(
              <BagItems key={i.id} name={i.name} quantity={i.quantity} image={i.image} price={i.price} />
            ))
            :
            <span className="empty-message">Your bag is empty 😔</span>

            }
      </div>
      {currentItems.length?
        <Link to={'/checkout'}>
          <Button>CheckOut</Button>
        </Link>
        :
        <Link style={{textDecoration:"underline"}} to={'/shop'}>
        <span className="empty-message">Let's add some items</span>
        </Link>

      }
    </div>
  );
}

export default DropdownBag;
