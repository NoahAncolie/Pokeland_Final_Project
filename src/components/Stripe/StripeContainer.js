import react from "react";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";



const PUBLIC_KEY = "pk_test_51LCmnQGYUcb6MHtXGiSiDpKbtLL4rBi8wztM9Ah47I5OAboFJ2iCx6cvBF6xhOKEwxRV5ytT0bBLDHiDlGGlWjgp00OO8vMEuU"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return(
        <Elements stripe={stripeTestPromise}>

        <PaymentForm />

        </Elements>

    )
}