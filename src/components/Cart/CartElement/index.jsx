import { useAtom } from "jotai"
import { Cart } from "store/atoms"
import Cookies from "js-cookie"

const CartElement = ({ item, index }) => {

    const [cart, setCart] = useAtom(Cart)

    const removeItem = () => {
        let current_cart = JSON.parse(cart)
        current_cart.splice(index, 1)
        setCart(JSON.stringify(current_cart))
        Cookies.set('user', JSON.stringify(current_cart), {
            sameSite: "none",
            secure: true
        })
    }

    return (
        <>
            <p>{item.name} <span className="timesNew">{item.price}&euro;</span></p>
            <div className="row">
                <div className="col">
                    <button className="card-link dark-link timesNew">Acheter</button>
                </div>
                <div className="col">
                    <button className="card-link dark-link remove-link timesNew" onClick={removeItem}>Enlever du Panier</button>
                </div>
            </div>
        </>
    )
}

export default CartElement