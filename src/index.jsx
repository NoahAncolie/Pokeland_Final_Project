import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { useAtomValue } from 'jotai';
import { userAtom } from 'store/atoms';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import React from 'react';
import Home from 'pages/Home/Home';
import RegisterForm from 'pages/RegisterForm';
import LoginForm from 'pages/LoginForm';
import Navbar from 'components/Navbar';
import Products from 'components/Items/products';
import Profile from 'components/Profile';
import ForgotPassword from 'components/ForgotPassword';
import Footer from 'components/Footer';
import Product from 'components/Product';
import CartComponent from 'components/Cart';
import CreateItem from 'pages/CreateItem';
import NotFound from 'pages/NotFound'


const App = () => {

    const user = useAtomValue(userAtom)

const options = {
    position: positions.TOP_LEFT,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE
  }

    return (
        <>
            <Router>
                <AlertProvider template={AlertTemplate} {...options}>
                <Navbar />
                {user.id ? <CartComponent/> : <></>}
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/items" element={<Products />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/connect" element={<LoginForm />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/createitem" element={ user.email === "admin@admin.com" ? <CreateItem />:<NotFound /> } />
                </Routes>
                </AlertProvider>
            </Router>
            <Footer />
        </>
    )
}

createRoot(document.getElementById('root')).render(<App />)