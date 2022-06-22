import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "../../assets/styles/nav.scss";
import ball from "../../assets/images/pokeball.png"

const Navbar = () => {
    useEffect(() => {
        document.getElementById('ball').addEventListener('click', function () {
            document.getElementById('ball').classList.toggle('pokeball-animation')
            document.getElementById('navbar').classList.toggle('closed-navbar')
        })
    }, []);

    return (
        <>
            <img src={ball} alt="pokeball" className="pokeball-toggler" id="ball" />
            <div className="high-nav nav" id="high-nav">
                
            </div>
            <div className="row">
                <div className={`navbar nav col-lg-2 col-md-4 closed-navbar`} id="navbar">
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/products">Produits</Link></li>
                        <li><Link to="/profil">Profil</Link></li>
                        <li><Link to="/connect">Se connecter</Link></li>
                        <li><Link to="/disconnect">Se déconnecter</Link></li>
                        <li><Link to="/register">S'enregistrer</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
