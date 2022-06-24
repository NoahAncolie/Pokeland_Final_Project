import { Link } from "react-router-dom"
import { Cart } from "store/atoms"
import { useSetAtom } from "jotai"

const Item = ({ item }) => {

    const setCart = useSetAtom(Cart)

    const addToCart = () => {
        setCart(item)
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