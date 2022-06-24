import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from 'pages/Home/Home';
import RegisterForm from 'pages/RegisterForm';
import LoginForm from 'pages/LoginForm';
import Navbar from 'components/Navbar';
import Products from 'components/Items/products';
import BuyItem from 'components/Items/BuyItem';
import ForgotPassword from 'components/ForgotPassword';
import Footer from 'components/Footer';
import Product from 'components/Product';
import CartComponent from 'components/Cart';
import { useAtomValue } from 'jotai';
import { userAtom } from 'store/atoms';

const App = () => {

    const user = useAtomValue(userAtom)

    return (
        <>
            <Router>
                <Navbar />
                {user ? <CartComponent /> : <></>}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/items" element={<Products />} />
                    <Route path="/buyitem" element={<BuyItem />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/connect" element={<LoginForm />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/product/:productId" element={<Product />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}

createRoot(document.getElementById('root')).render(<App />)