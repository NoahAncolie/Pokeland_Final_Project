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
                <div className="col-lg-8 col-sm-0"></div>
                <div className="col-lg-3 webInfosVisible">
                    <p>Sur ce site, vous pourrez...</p>
                    <ul className='webInfo-list'>
                        <li>
                            Trouver des cartes pokémons rares.<br/><br/>
                        </li>
                        <li>
                            Commander ces cartes auprès de collectionneurs.<br/><br/>
                        </li>
                        <li>
                            Enregistrer les plus belles cartes dans vos favoris.<br/><br/>
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