import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLoaderData } from "react-router-dom";


const stripePromise=loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY)
const Payment = () => {
    const items=useLoaderData()
     const totalPrice = items.reduce((total, acc) => total + acc.price, 0);
    
    return (
        <div>
            <Elements stripe={stripePromise}>
                {items.map(item=><CheckOutForm key={item._id} item={item} totalPrice={totalPrice}></CheckOutForm>)}
            </Elements>
        </div>
    );
};

export default Payment;