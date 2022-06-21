import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../assets/styles/nav.scss"
import carousel1 from "../../assets/images/cards_bg.jpg"
import carousel2 from "../../assets/images/many_pokes.png"
import carousel3 from "../../assets/images/pikachu.png"


const CarouselHome = () => {

    return (
        <div className="carousel-wrapper" >
            <Carousel
                he
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showThumbs={false}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const defStyle = { margin: 5, color: "white", fontWeight: 800, fontSize: 30, cursor: "pointer" };
                    const style = isSelected
                        ? { ...defStyle, color: "#eec30e" }
                        : { ...defStyle };
                    return (
                        <span
                            style={style}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                        >
                            {"____"}
                        </span>
                    );
                }}
            >
                <div>
                    <img src={carousel1} alt="pokemon-cards" />
                </div>
                <div>
                    <img src={carousel2} alt="pokemons" />
                </div>
                <div>
                    <img src={carousel3} alt="pikachu" />
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselHome;