import cart from 'assets/images/3D_cart.png'
import 'assets/styles/cart.scss'
import { useAtomValue } from 'jotai'
import { Cart } from 'store/atoms'
import CartElement from './CartElement'
import { useEffect, useState } from 'react'

const CartComponent = () => {

    const cartElements = JSON.parse(useAtomValue(Cart))
    const [total, setTotal] = useState(0)

    const toggleCaddie = () => {
        document.getElementsByClassName('caddie')[0].classList.toggle('closed-caddie')
    }

    useEffect(() => {
        cartElements.map(element => (
            setTotal(total + element.price)
        ))
    }, [cartElements])

    return (
        <>
            <img src={cart} alt="3d-caddie" className='cart-picture' onClick={toggleCaddie}/>
            <div className="caddie">
                <h1 className="products-title">Votre Panier.</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-0"></div>
                    <div className="col-lg-6">
                        {cartElements.map((item, index) => (
                            <CartElement item={item} key={item.id} index={index}/>
                        ))}
                        <button className="cart-btn timesNew" >Procéder au payment</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartComponent