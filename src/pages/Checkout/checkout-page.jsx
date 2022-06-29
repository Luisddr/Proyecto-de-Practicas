import React, { useContext, useEffect, useState } from "react";
import "./checkout-page.scss";
import { ToggleContext } from "../../context/toggle.context";

function CheckoutPage() {
  const { currentItems, setCurrentItems } = useContext(ToggleContext);
  const [total, setTotal] = useState(0)

  const prices = currentItems.map(i=>i.subtotal)

  const finalPrice = prices.reduce((prev, current)=> prev + current,0)
  
  useEffect(()=>{
        setTotal(finalPrice)

    },[finalPrice])

  return (
    <>
      <div className="container">
        <h3>Product</h3>
        <h3>Quanity</h3>
        <h3>Price</h3>
        <h3>Subtotal</h3>
      </div>
      {currentItems.length ? (
        currentItems.map((item) => (
          <div className="parent">
            <div>{item.name}</div>
            <div>
              {item.quantity >= 2 && (
                <button
                  onClick={() => {
                    let product = currentItems.filter((p) => p.id === item.id);
                    let productObj = product[0];
                    productObj.quantity = productObj.quantity - 1;
                    return setCurrentItems([...currentItems]);
                  }}
                >
                  -
                </button>
              )}
              <span>{item.quantity}</span>
              <button
                onClick={() => {
                  let product = currentItems.filter((p) => p.id === item.id);
                  let productObj = product[0];
                  productObj.quantity = productObj.quantity + 1;
                  return setCurrentItems([...currentItems]);
                }}
              >
                +
              </button>
            </div>
            <div>{item.price}</div>
            <div>
              <span>{item.subtotal}</span>
              <span
                style={{
                  cursor: "pointer",
                  margin: "5px",
                  fontWeight: "lighter",
                }}
                onClick={() => {
                  let filteredItems = currentItems.filter(
                    (i) => i.id !== item.id
                  );
                  setCurrentItems(filteredItems);
                }}
              >
                Delete
              </span>
            </div>
          </div>
        ))
      ) : (
        <h2>Your bag is empty 😔</h2>
      )}
      <div style={{display:"flex", alignContent:"flex-end", justifyContent:"flex-end"}}>
        <span>Total</span><br />
        <span>${total}</span>
    </div>
    </>
  );
}

export default CheckoutPage;
