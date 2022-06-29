import React, { useEffect, useRef } from 'react'
import "assets/styles/paypal.scss"
import { useAlert } from 'react-alert'

const PaypalComponent = ({ product_price, saveOrder, closeCheckout }) => {

    const paypal = useRef()
    const alert = useAlert()

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
                alert.success('Commande passée !')
            },
            onError: (error) => {
                console.log(error)
            }
        }).render(paypal.current)
    }, [product_price])

    return (
        <div className="row">
            <div className="checkout-div col-lg-4 col-md-4">
                <button className="close-btn" onClick={() => { closeCheckout() }}>X</button>
                <div ref={paypal}></div>
            </div>
        </div>
    )
}

export default PaypalComponent