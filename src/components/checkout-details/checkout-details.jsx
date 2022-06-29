import React, { useContext } from "react";
import "./checkout-details.styles.scss";
import { ToggleContext } from "../../context/toggle.context";

function CheckoutDetails({ name, quantity, id, price, subtotal, image }) {
  const { currentItems, setCurrentItems } = useContext(ToggleContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={image} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {quantity >=2 &&

          <div
          className="arrow"
          onClick={() => {
            let product = currentItems.filter((p) => p.id === id);
            let productObj = product[0];
            productObj.quantity = productObj.quantity - 1;
            return setCurrentItems([...currentItems]);
          }}
          >
          &#10094;
        </div>
        }
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            let product = currentItems.filter((p) => p.id === id);
            let productObj = product[0];
            productObj.quantity = productObj.quantity + 1;
            return setCurrentItems([...currentItems]);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{subtotal}</span>
      <div
        className="remove-button"
        onClick={() => {
          let filteredItems = currentItems.filter((i) => i.id !== id);
          setCurrentItems(filteredItems);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}

export default CheckoutDetails;
