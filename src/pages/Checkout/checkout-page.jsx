import React, { useContext, useEffect, useState, memo } from "react";
import "./checkout-page.scss";
import { ToggleContext } from "../../context/toggle.context";
import CheckoutDetails from "../../components/checkout-details/checkout-details";
import PaymentForm from "../../components/payment-form/payment-form";
import { Helmet } from "react-helmet";

const CheckoutPage = memo(()=> {
  const { currentItems} = useContext(ToggleContext);
  const [total, setTotal] = useState(0);

  const prices = currentItems.map((i) => i.subtotal);

  const finalPrice = prices.reduce((prev, current) => prev + current, 0);

  useEffect(() => {
    setTotal(finalPrice);
  }, [finalPrice]);

  return (
    <>
    <Helmet>
      <title>Clothing Store | Checkout items</title>

    </Helmet>
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>subtotal</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {currentItems.length?
       currentItems.map((item) => (
         <CheckoutDetails key={item.id}
         id={item.id}
         name={item.name}
         price={item.price}
         quantity={item.quantity}
         subtotal={item.subtotal}
         image={item.image}
         />
         
         
         ))
         :
         <h3>Your Bag is Empty 😔</h3>
        }
      <div className='total'>TOTAL: ${total}</div>
      <PaymentForm amount={total}/>
    </div>
        </>
  );
});
   

export default CheckoutPage;
