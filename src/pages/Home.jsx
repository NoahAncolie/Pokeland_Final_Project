import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
            <div className="row">
                <div className="col-md-4"><p>Hello</p></div>
                <div className="col-md-4"><p>World</p></div>
                <div className="col-md-4"><p>Love</p></div>
            </div>
        </>
    )
}

export default Home