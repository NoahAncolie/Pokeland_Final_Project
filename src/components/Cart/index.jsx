import cart from 'assets/images/3D_cart.png'
import 'assets/styles/cart.scss'
import { useAtomValue } from 'jotai'
import { Cart, userAtom } from 'store/atoms'
import CartElement from './CartElement'
import { useEffect, useState } from 'react'

const CartComponent = () => {

    const elements = useAtomValue(Cart)
    const cartElements = JSON.parse(elements)
    const user = useAtomValue(userAtom)
    const [total, setTotal] = useState(0)

    const toggleCaddie = () => {
        document.getElementsByClassName('caddie')[0].classList.toggle('closed-caddie')
    }

    const buyProducts = () => {
        let userId = JSON.parse(user).id
        elements.map((product) => (
            fetch(`https://pokeland-api.herokuapp.com/orders`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    quantity: 1,
                    user_id: userId,
                    product_id: product.id
                })
            })
        ))
        alert('Produits Achetés !')
    }

    function printLetterByLetter(destination, message, speed) {
        var i = 0;
        var interval = setInterval(function () {
            destination.innerHTML += message.charAt(i);
            i++;
            if (i > message.length) {
                clearInterval(interval);
            }
        }, speed);
    }

    const addEmptyText = () => {
        let element = document.getElementById('empty-cart')
        if (element) {
            element.innerHTML = ""
            printLetterByLetter(element, "Votre panier est vide...", 50)
        }
    }

    const editTotal = () => {
        let current_total = 0
        cartElements.map(element => (
            current_total += element.price)
        )
        setTotal(current_total)
    }

    useEffect(() => {
        editTotal()
    }, [cartElements])

    return (
        <>
            <img src={cart} alt="3d-caddie" className='cart-picture' onClick={() => { toggleCaddie(); addEmptyText(); }} />
            <div className="caddie closed-caddie">
                <h1 className="products-title">Votre Panier.</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-0"></div>
                    <div className="col-lg-6">
                        {cartElements.map((item, index) => (
                            <CartElement item={item} key={item.id} index={index} />
                        ))}
                        {total ? <button className="cart-btn timesNew" onClick={buyProducts}>Procéder au payment ({total}&euro;)</button> : <><p id="empty-cart"></p></>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartComponent