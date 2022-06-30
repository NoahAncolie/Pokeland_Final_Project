import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Cart, userAtom } from "store/atoms"
import { useAtom, useAtomValue } from "jotai"
import Cookies from "js-cookie"
import PaypalComponent from "components/PaypalComponent"
import { useAlert } from "react-alert"

const Product = () => {

    const [product, setProduct] = useState("")
    const [cart, setCart] = useAtom(Cart)
    const params = useParams()
    const user = useAtomValue(userAtom)
    const [checkout, setCheckout] = useState(false)
    const alert = useAlert()

    const openCheckout = () => {
        setCheckout(true)
    }

    const closeCheckout = () => {
        setCheckout(false)
    }

    const loadProduct = (datas) => {
        setProduct(datas)
        console.log(datas)
    }

    const addToCart = () => {
        let current_cart = JSON.parse(cart)
        current_cart.push(product)
        setCart(JSON.stringify(current_cart))
        Cookies.set('cart', JSON.stringify(current_cart), {
            sameSite: "none",
            secure: true
        })
        alert.success(`${product.name} ajouté au Panier ! 🧺`)
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
                product_id: product.id
            })
        })
    }

    useEffect(() => {
        fetch(`https://pokeland-api.herokuapp.com/products/${params.productId}`, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        }
        ).then((response) => { return response.json() })
            .then((response) => loadProduct(response))
    }, [params.productId])

    return (
        <div className="products-bg">
            <h1 className="products-title">Produit.</h1>
            <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-0">
                </div>
                <div className="col-lg-4 col-md-6 product">
                    <img href={product.image_path} alt="pokemon" />
                    <h3 className="gameboy-text">{product.name}</h3>
                    <p>Pays d'origine : <span className="timesNew">{product.country}</span></p>
                    <p>Description : <span className="timesNew">{product.description}</span></p>
                    <p>Prix : <span className="timesNew">{product.price}&euro;</span></p>
                    <p>Quantité : <span className="timesNew">{product.stock}</span></p>
                    {user.id ?
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <button className="card-link timesNew" onClick={openCheckout}>Acheter</button>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <button className="card-link timesNew" onClick={addToCart}>Panier</button>
                            </div>
                        </div>
                        : <></>
                    }
                </div>
            </div>
            {checkout ? <PaypalComponent product_price={product.price} saveOrder={buyProduct} closeCheckout={closeCheckout} /> : <></>}
        </div>
    )
}

export default Product