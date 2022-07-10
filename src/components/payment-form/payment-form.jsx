import React, {useState} from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { PaymentContainer, FormContainer } from "./payment-form.styles";
import {useSelector} from 'react-redux';



function PaymentForm({amount}) {
    const elements = useElements()
    const stripe = useStripe()
    const currentUser = useSelector((state)=>state.user.currentUser)
    const [isPaymentDone, setIsPaymentDone] = useState(false)

    const paymentHandler = async (e)=>{
        e.preventDefault();

        if(!stripe || !elements){
            return
        }

        setIsPaymentDone(true)

        const response = await fetch('/.netlify/functions/create-payment-intent',{
          method: 'post',
          headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({amount : amount * 100})
        }).then(res=>res.json())
        
        const {paymentIntent: {client_secret}} = response


        const paymentResult = await stripe.confirmCardPayment(client_secret,{
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details:{
              name: currentUser ? currentUser.displayName : 'Client'
            }
          }
        })

        setIsPaymentDone(false)

        if(paymentResult.error){
          alert(paymentResult.error)
        }
        else{
          if(paymentResult.paymentIntent.status === 'succeeded'){
            alert("Payment Succesful")
          }
        }

    }

  return (
    <>
      <PaymentContainer>
        <FormContainer onSubmit={paymentHandler}>
          <CardElement />
          <Button isLoading={isPaymentDone} buttonType={"inverted"}>Pay here</Button>
        </FormContainer>
      </PaymentContainer>
    </>
  );
}

export default PaymentForm;
