import { Link } from "react-router-dom";





    const Products = () => {
    return(

    <>
       
       <section class="container">
    <div class="card">
        <div class="card-image card-1"></div>
        <h2 class="tit">Coffret pokemon celebration 25ans</h2>
        <p class="pa">ZACIAN</p>
        <button className="button-buy"><Link to="/buyitem">Acheter</Link></button>
    </div>
    <div class="card">
        <div class="card-image card-2"></div>
        <h2 class="tit">Coffret pokemon celebration 25ans</h2>
        <p class="pa">DRACAUFEU</p>
        <button className="button-buy"><Link to="/buyitem">Acheter</Link></button>
    </div>
    <div class="card">
        <div class="card-image card-3"></div>
        <h2 class="tit">Coffret pokemon celebration 25ans</h2>
        <p class="pa">LANSSORIEN</p>
        <button className="button-buy"><Link to="/buyitem">Acheter</Link></button>
    </div>
    <div class="card">
        <div class="card-image card-4"></div>
        <h2 class="tit">Coffret pokemon celebration 25ans</h2>
        <p class="pa">NYMPHALI</p>
        <button className="button-buy"><Link to="/buyitem">Acheter</Link></button>
    </div>
    <div class="card">
        <div class="card-image card-5"></div>
        <h2 class="tit">Elite Trainer Box</h2>
        <p class="pa">EVOLI</p>
        <button className="button-buy"><Link to="/buyitem">Acheter</Link></button>

    </div>
        </section>

      
    </>
)}

export default Products;