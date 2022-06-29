import React, { useEffect, useRef }  from 'react'
import "assets/styles/paypal.scss"

const PaypalComponent = ({product_price, saveOrder, closeCheckout}) => {

    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, error) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Basket Content",
                            amount: {
                                currency_code: "EUR",
                                value: product_price
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                saveOrder()
                const order = await actions.order.capture()
                console.log(order)
            },
            onError: (error) => {
                console.log(error)
            }
        }).render(paypal.current)
    }, [product_price])

    return (
        <div className="checkout-div">
            <button className="close-btn" onClick={() => {closeCheckout()}}>X</button>
            <div ref={paypal}></div>
        </div>
    )
}

export default PaypalComponent