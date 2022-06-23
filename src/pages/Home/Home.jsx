import React, { useEffect } from 'react'
import ThreeLogo from 'components/ThreeLogo'
import "assets/styles/rondoudou.scss"

const Home = () => {

    useEffect(() => {
        console.log('Hello bg')
    });

    return (
        <div className='homepage'>
            <h1 className='home-title'><span className="poke-letter grow">Pokéland</span></h1>
            <div className="websiteInfos row">
                <div className="col-lg-8"></div>
                <div className="col-lg-3 webInfosVisible">
                    <p>Sur ce site, vous pourrez...</p>
                    <ul className='webInfo-list'>
                        <li>
                            Trouver des cartes pokémons rares.
                        </li>
                        <li>
                            Commander ces cartes auprès de collectionneurs.
                        </li>
                        <li>
                            Enregistrer les plus belles cartes dans vos favoris.
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