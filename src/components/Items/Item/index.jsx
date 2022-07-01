import { Link } from "react-router-dom"
import { Cart, userAtom } from "store/atoms"
import { useAtom, useAtomValue } from "jotai"
import Cookies from "js-cookie"
import { useAlert } from "react-alert";

const Item = ({ item }) => {

    const [cart, setCart] = useAtom(Cart)
    const alert = useAlert()
    const user = useAtomValue(userAtom)

    const addToCart = () => {
        let current_cart = JSON.parse(cart)
        current_cart.push(item)
        setCart(JSON.stringify(current_cart))
        Cookies.set('cart', JSON.stringify(current_cart), {
            sameSite: "none",
            secure: true
        })
        alert.success(`${item.name} ajouté au Panier ! 🧺`)
    }

    return (
        <div className="item-card">
            <div className="row">
                <div className="col">
                    <img src={item.image_path} alt="pokemon" className="list-image"/>
                    <p className="card-name">{item.name}</p>
                    <p className="timesNew description">{item.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="card-price timesNew">Prix : <span className="price-number">{item.price}&euro;</span></p>
                </div>
                <div className="col">
                    <Link to={`/product/${item.id}`} className="card-link timesNew">Voir</Link>
                </div>
                {user.id ? 
                <div className="col">
                    <button className="card-link timesNew" onClick={addToCart}>Panier</button>
                </div> 
                : <></>}
            </div>
        </div>
    )
}

export default Item