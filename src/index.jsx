import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';

const App = () => {
    return (
        <>
            <Home />
        </>
    )
}

createRoot(document.getElementById('root')).render(<App/>)