import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProviders";

const CheckOutForm = ({item,totalPrice}) => {
  
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const axiosSecure = useAxiosSecure();
 
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchClientSecret = async () => {
      if (totalPrice > 0 && totalPrice <= 999999.99) {
        try {
          const response = await axiosSecure.post('/create-payment-intent', { price: totalPrice });
          setClientSecret(response.data.clientSecret);
        } catch (error) {
          setError('Failed to create payment intent');
        }
      } else {
        setError('Total price exceeds the allowed limit');
      }
    };

    fetchClientSecret();
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        setError(error.message);
      } else {
        setError('');

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              email: user?.email || 'anonymous',
              name: user?.displayName || 'anonymous'
            }
          }
        });

        if (confirmError) {
          setError('Payment confirmation failed');
        } else {
          if (paymentIntent?.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            const payment = {
              email: user.email,
              name: user.displayName,
              contestName: item.name,
              creatorEmail:item.email
            };

            const res = await axiosSecure.post('/registration', payment);
            

            if (res.data?.paymentResult?.insertedId) {
              Swal.fire({
                title: "Thank you for payment",
                icon: "success"
              });
            }
          }
        }
      }
    } catch (error) {
      setError('Payment failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      
      {transactionId && <p className="text-green-500">Your transaction id: {transactionId}</p>}
    </form>
  );
};

export default CheckOutForm;
