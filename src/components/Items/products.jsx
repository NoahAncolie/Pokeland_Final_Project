import { useEffect, useState } from 'react';
import Item from './Item';
import "assets/styles/products.scss"
import "assets/styles/searchbar.scss"


const Products = () => {
    const [ products, setProducts] = useState([]);
    const [ searchInput, setSearchInput ] = useState("");
    const [ filteredResults, setFilteredResults ] = useState([]);
    
    
    const loadProducts = (datas) => {
        setProducts(JSON.stringify(datas))
        setFilteredResults(datas)
        console.log(datas)
    }

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
       // console.log(searchValue);
       const parsedProducts = JSON.parse(products);
        if (searchInput !== "") {
        const filteredProducts = parsedProducts.filter((item) => {
          return Object.values(item)
          .join('').toLowerCase()
          .includes(searchInput.toLowerCase());  
        })
         setFilteredResults(filteredProducts);
        } else {
         setFilteredResults(parsedProducts);
        }
       // console.log(filteredProducts);
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
            <div className="searchCtn">
                <div className='filter'>
                    <input className="searchBar" type="text" placeholder="Recherche..." onChange={(e) => searchItems(e.target.value)} ></input>
                </div>
            </div>
            <div className="row">
                { searchInput.length !== "" ?
                 filteredResults.map(item => (
                    item.stock > 0 ?
                    <div className="col-lg-4 col-md-6">
                        <Item item={item} key={item.id} />
                    </div> : <></>
                )) : <></>
                }
             
            </div>
        </div>
    )
}

export default Products;