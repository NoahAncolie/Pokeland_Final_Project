import React, { useEffect } from 'react'
import ThreeLogo from 'components/ThreeLogo'
import "assets/styles/rondoudou.scss"

const Home = () => {

    useEffect(() => {
        console.log('Welcome')
    });

    return (
        <div className='homepage'>
            <h1 className='home-title'><span className="poke-letter grow">Pokéland</span></h1>
            <div className="websiteInfos row">
                <div className="col-lg-8 col-sm-0"></div>
                <div className="col-lg-3 webInfosVisible">
                    <p>Sur ce site, vous pourrez...</p>
                    <ul className='webInfo-list'>
                        <li>
                            Trouver des cartes pokémons communes et rares.<br/><br/>
                        </li>
                        <li>
                            Commander et acheter vos produits préférés.<br/><br/>
                        </li>
                        <li>
                            Enregistrer vos produits dans votre panier.<br/><br/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='my-canvas'>
                <ThreeLogo />
            </div>
        </div>
    )
}

export default Home