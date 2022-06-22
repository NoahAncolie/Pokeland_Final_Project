import React from 'react'
import ThreeLogo from 'components/ThreeLogo'
import "../../assets/styles/rondoudou.scss"

const Home = () => {

    

    return (
        <div className='homepage'>
            <h1 className='home-title'>Pokeland</h1>
            <div className='my-canvas'>
                <ThreeLogo />
            </div>
        </div>
    )
}

export default Home