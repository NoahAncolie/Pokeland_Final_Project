import { Link } from "react-router-dom"
import { Cart } from "store/atoms"
import { useAtom } from "jotai"
import Cookies from "js-cookie"


const Item = ({ item }) => {

    const [cart, setCart] = useAtom(Cart)

    const addToCart = () => {
        let current_cart = JSON.parse(cart)
        current_cart.push(item)
        setCart(JSON.stringify(current_cart))
        Cookies.set('cart', JSON.stringify(current_cart), {
            sameSite: "none",
            secure: true
        })
    }

    return (
        <div className="item-card">
            <div className="row">
                <div className="col">
                    <img href={item.image_path} alt="pokemon" />
                    <p>{item.name}</p>
                    <p className="timesNew">{item.description}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="card-price timesNew">Prix : {item.price}&euro;</p>
                </div>
                <div className="col">
                    <Link to={`/product/${item.id}`} className="card-link timesNew">Voir</Link>
                </div>
                <div className="col">
                    <button className="card-link timesNew" onClick={addToCart}>Panier</button>
                </div>
            </div>
        </div>
    )
}

export default Item