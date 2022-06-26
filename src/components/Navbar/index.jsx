import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "../../assets/styles/nav.scss";
import ball from "../../assets/images/pokeball.png";
import Cookies from "js-cookie";
import { useSetAtom, useAtomValue } from "jotai";
import { userAtom, JWT, Cart } from "store/atoms";


const Navbar = () => {

    const setToken = useSetAtom(JWT);
    const setUser = useSetAtom(userAtom);
    const setCart = useSetAtom(Cart)
    const jwt = useAtomValue(JWT);

    const ToggleNav = () => {
        document.getElementById('ball').classList.toggle('pokeball-animation')
        document.getElementById('navbar').classList.toggle('closed-navbar')
    }
    useEffect(() => {
        document.getElementById('ball').addEventListener('click', function () {
            ToggleNav()
        })
    }, []);

    function logout() {
        console.log(Cookies.get('token'));
        fetch("https://pokeland-api.herokuapp.com/users/sign_out", {
         method: "delete",
         headers: {
             "Authorization": Cookies.get('token'),
             "Content-Type": "application/json"
         }
         })
         Cookies.remove('token', {
             sameSite: "none",
             secure: true
            })
            Cookies.remove('user', {
            sameSite: "none",
            secure: true
            })
            Cookies.remove('cart', {
                sameSite: "none",
                secure: true
            })
            setToken("");
            setUser("");
            setCart(JSON.stringify([]))
    }

    return (
        <>
            <img src={ball} alt="pokeball" className="pokeball-toggler" id="ball" />
            <div className="row">
                <div className={`navbar nav col-lg-4 col-md-8 closed-navbar`} id="navbar">
                    <ul>
                        <li><h1 className='nav-title'>Pokéland</h1></li>
                        <li><Link to="/" onClick={ToggleNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
                            </svg>
                            &nbsp;&nbsp;Accueil
                        </Link></li>
                        <li><Link to="/items" onClick={ToggleNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z" />
                            </svg>
                            &nbsp;&nbsp;Produits
                        </Link></li>
                        {jwt === "" ?
                        <>
                        <li><Link to="/connect" onClick={ToggleNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
                            </svg>
                            &nbsp;&nbsp;Se connecter
                        </Link></li>
                        <li><Link to="/register" onClick={ToggleNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z" />
                            </svg>
                            &nbsp;&nbsp;S'enregistrer
                        </Link></li>
                        </>
                        :
                        <>
                        <li><Link to="/profile" onClick={ToggleNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" />
                            </svg>
                            &nbsp;&nbsp;Profil
                        </Link></li>
                        <li><Link to="/connect" onClick={() => { ToggleNav(); logout();}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path d="M624 448h-80V113.45C544 86.19 522.47 64 496 64H384v64h96v384h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM312.24 1.01l-192 49.74C105.99 54.44 96 67.7 96 82.92V448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h336V33.18c0-21.58-19.56-37.41-39.76-32.17zM264 288c-13.25 0-24-14.33-24-32s10.75-32 24-32 24 14.33 24 32-10.75 32-24 32z" />
                            </svg>
                            &nbsp;&nbsp;Se déconnecter
                        </Link></li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar