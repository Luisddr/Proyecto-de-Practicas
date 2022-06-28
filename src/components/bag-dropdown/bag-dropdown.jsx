import React, {useContext, useEffect} from "react";
import Button from "../button/button.component";
import "./bag-dropdown.styles.scss";
import {ToggleContext} from '../../context/toggle.context'
import BagItems from "../bag-items/bag-items";


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
      <Button>CheckOut</Button>
    </div>
  );
}

export default DropdownBag;
