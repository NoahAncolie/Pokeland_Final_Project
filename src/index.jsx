import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from 'pages/Home/Home';
import RegisterForm from 'pages/RegisterForm';
import LoginForm from 'pages/LoginForm';
import Navbar from 'components/Navbar';
import ForgotPassword from 'components/ForgotPassword';

const App = () => {
    return (
        <>
        <Router>
            <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/connect" element={<LoginForm />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
         </Routes>    
        </Router>    
        </>
    )
}

createRoot(document.getElementById('root')).render(<App />)