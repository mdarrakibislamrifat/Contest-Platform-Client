import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../../Providers/AuthProviders";


const CheckOutForm = () => {
    const stripe=useStripe()
    const elements=useElements();
    const axiosSecure=useAxiosSecure();
   const {user} =useContext(AuthContext)
   const [clientSecret,setClientSecret]=useState('');

    useEffect(()=>{
       axiosSecure.post('/create-payment-intent',{email:user?.email})
       .then(res=>{
    setClientSecret(res.data.clientSecret)
       })
    },[axiosSecure])

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }
          
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button disabled={!stripe || !clientSecret} className="btn btn-sm btn-primary my-4" type="submit" >
        Pay
      </button>
        </form>
    );
};

export default CheckOutForm;