import { useAtom, useAtomValue } from "jotai"
import { Cart, userAtom } from "store/atoms"
import Cookies from "js-cookie"

const CartElement = ({ item, index }) => {

    const [cart, setCart] = useAtom(Cart)
    const user = useAtomValue(userAtom)

    const removeItem = () => {
        let current_cart = JSON.parse(cart)
        current_cart.splice(index, 1)
        setCart(JSON.stringify(current_cart))
        Cookies.set('cart', JSON.stringify(current_cart), {
            sameSite: "none",
            secure: true
        })
    }

    const buyProduct = () => {
        let userId = JSON.parse(user).id
        fetch(`https://pokeland-api.herokuapp.com/orders`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quantity: 1,
                user_id: userId,
                product_id: item.id
            })
        })
        alert('Produit Acheté !')
    }

    return (
        <>
            <p>{item.name} <span className="timesNew">{item.price}&euro;</span></p>
            <div className="row">
                <div className="col">
                    <button className="card-link dark-link timesNew" onClick={() => {buyProduct(); removeItem()}}>Acheter</button>
                </div>
                <div className="col">
                    <button className="card-link dark-link remove-link timesNew" onClick={removeItem}>Enlever du Panier</button>
                </div>
            </div>
        </>
    )
}

export default CartElement