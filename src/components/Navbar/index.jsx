import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
        <Link to="/">Accueil</Link>
        <Link to="/register">S'inscrire</Link>
        </>
    )
}

export default Navbar;