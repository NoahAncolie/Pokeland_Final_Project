import React, { useState } from "react";
import { CardElement , useElements , useStripe , } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTION = {
    iconStyle : "solid",
    style: {
        base:{
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883"},
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
}

export default function PaymentForm() {
    const [success , setSuccess] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error , paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        })

        if (!error) {
            try{
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:4000/payment" , {
                    amount: 1000,
                    id
                })
                if(response.data.success) {
                    console.log("Paiement réussi 👍")
                    setSuccess(true)
                }
            }catch (error) {
                console.log("Erreur" , error)
            }
        } else {
            console.log(error.message)
        }

    }
    return(
        <>

        {!success ?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTION} />
                </div>
            </fieldset>
            <button>Payez</button>
        </form>
            :
            <div>
                <h2>Votre paiement a été éffectué avec succes !</h2>
            </div>
        }

        </>

    )
}