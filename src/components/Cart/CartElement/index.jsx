import { useAtom, useAtomValue } from "jotai"
import { Cart, userAtom } from "store/atoms"
import Cookies from "js-cookie"
import PaypalComponent from "components/PaypalComponent"
import { useState } from "react"
import { useAlert } from "react-alert"

const CartElement = ({ item, index }) => {

    const [cart, setCart] = useAtom(Cart)
    const user = useAtomValue(userAtom)
    const [checkout, setCheckout] = useState(false)
    const alert = useAlert()

    const openCheckout = () => {
        setCheckout(true)
    }

    const closeCheckout = () => {
        setCheckout(false)
    }

    const removeItem = () => {
        let current_cart = JSON.parse(cart)
        current_cart.splice(index, 1)
        setCart(JSON.stringify(current_cart))
        Cookies.set('cart', JSON.stringify(current_cart), {
            sameSite: "none",
            secure: true
        })
        alert.info(`${item.name} retiré du panier.`)
    }

    const buyProduct = () => {
        fetch(`https://pokeland-api.herokuapp.com/orders`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: 1,
                user_id: user.id,
                product_id: item.id
            })
        })
    }

    return (
        <>
            <p>{item.name} <span className="timesNew">{item.price}&euro;</span></p>
            <div className="row">
                <div className="col">
                    <button className="card-link dark-link timesNew" onClick={() => {openCheckout()}}>Acheter</button>
                </div>
                <div className="col">
                    <button className="card-link dark-link remove-link timesNew" onClick={removeItem}>Enlever du Panier</button>
                </div>
            </div>
            {checkout ? <PaypalComponent product_price={item.price} saveOrder={buyProduct} closeCheckout={closeCheckout} /> : <></>}
        </>
    )
}

export default CartElement