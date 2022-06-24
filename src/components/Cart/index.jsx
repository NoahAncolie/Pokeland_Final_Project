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

    function printLetterByLetter(destination, message, speed){
        var i = 0;
        var interval = setInterval(function(){
            destination.innerHTML += message.charAt(i);
            i++;
            if (i > message.length){
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
            <img src={cart} alt="3d-caddie" className='cart-picture' onClick={() => { toggleCaddie(); addEmptyText();}}/>
            <div className="caddie closed-caddie">
                <h1 className="products-title">Votre Panier.</h1>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-0"></div>
                    <div className="col-lg-6">
                        {cartElements.map((item, index) => (
                            <CartElement item={item} key={item.id} index={index}/>
                        ))}
                        { total ?  <button className="cart-btn timesNew" >Procéder au payment ({total}&euro;)</button> : <><p id="empty-cart"></p></>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartComponent