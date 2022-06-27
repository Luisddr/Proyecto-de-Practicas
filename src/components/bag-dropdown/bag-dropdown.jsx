import React from "react";
import Button from "../button/button.component";
import "./bag-dropdown.styles.scss";

function DropdownBag() {
  return (
    <div className="cart-dropdown-container">
      <div className="empty-message" />
      <div className="cart-items" >
        <div className="items-detail">
            <span>xxx</span>
            <span>price: 20</span>
            <span>Quantity:30</span>
        </div>
      </div>
      <Button>CheckOut</Button>
    </div>
  );
}

export default DropdownBag;
