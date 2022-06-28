import React, {useContext} from "react";
import Button from "../button/button.component";
import "./bag-dropdown.styles.scss";
import {ToggleContext} from '../../context/toggle.context'


function DropdownBag() {

  const {currentItems} = useContext(ToggleContext)

  return (
    <div className="cart-dropdown-container">
      <div className="empty-message" />
      <div className="cart-items" >
            {currentItems.length && currentItems.map(i=>(
              <div className="items-detail">
                <span>{i.name}</span>
                <span>x{i.quantity}</span>
              </div>
            ))

            }
      </div>
      <Button>CheckOut</Button>
    </div>
  );
}

export default DropdownBag;
