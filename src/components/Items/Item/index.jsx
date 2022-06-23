import { Link } from "react-router-dom"

const Item = ({ item }) => {
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
                    <Link to="/acheter" className="card-link timesNew">Panier</Link>
                </div>
            </div>
        </div>
    )
}

export default Item