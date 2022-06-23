import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from 'pages/Home/Home';
import RegisterForm from 'pages/RegisterForm';
import LoginForm from 'pages/LoginForm';
import Navbar from 'components/Navbar';
import Products from 'components/Items/products';
import BuyItem from 'components/Items/BuyItem';
import Profile from 'components/Profile';

const App = () => {

    return (
        <>
        <Router>
            <Navbar />
            
         <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/connect" element={<LoginForm />} />
          <Route path="/items" element={<Products />} />
          <Route path="/buyitem" element={<BuyItem />} />
          <Route path="/profile" element={<Profile />} />
         </Routes>    
        </Router>    
        </>
    )
}

createRoot(document.getElementById('root')).render(<App />)