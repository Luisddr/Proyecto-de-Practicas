import React, { useContext, useEffect } from "react";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { ToggleContext } from "../../context/toggle.context";

function ProductCard({ image, name, price, id }) {
  const product = { image, name, price, id };

  const { addItemsToBag, currentItems, setCurrentItems } =
    useContext(ToggleContext);

  const handleAddItems = () => {
    const itemExists = currentItems.find((p) => p.id === product.id);

    if (itemExists) {
      let item = currentItems.filter((p) => p.id === product.id);
      let itemObj = item[0];
      itemObj.quantity = itemObj.quantity + 1;
      return setCurrentItems([...currentItems]);
    }
    product.quantity = 1;
    addItemsToBag(product);
  };
  return (
    <div className="product-card-container">
      <img src={image} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddItems}>
        Add to card
      </Button>
    </div>
  );
}

export default ProductCard;
