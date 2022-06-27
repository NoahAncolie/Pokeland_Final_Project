import { useEffect, useState } from 'react';
import Item from './Item';
import "assets/styles/products.scss"

const Products = () => {
    const [products, setProducts] = useState("")

    const loadProducts = (datas) => {
        setProducts(JSON.stringify(datas))
        console.log(datas)
    }

    useEffect(() => {
        fetch('https://pokeland-api.herokuapp.com/products', {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        }
        ).then((response) => { 
            console.log(response)
            return response.json() })
            .then((response) => {
            console.log(response);
            loadProducts(response)
    })
    }, [])

    return (
        <div className="products-bg">
            <h1 className='products-title'>Pokéland</h1>
            <div className="row">
                {products.length ? JSON.parse(products).map(item => (
                    item.stock > 0 ?
                    <div className="col-lg-4 col-md-6">
                        <Item item={item} key={item.id} />
                    </div> : <></>
                )) : <></>}
            </div>
        </div>
    )
}

export default Products;