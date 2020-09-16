import React, {useEffect, useState} from 'react';
import Firebase from '../base';

import Slide from './Slide';
import '../css/games.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight, faBars} from '@fortawesome/free-solid-svg-icons';



const Games = () => {
    const [games, setGames] = useState(null);
    const [slides, setSlides] = useState(null);
    const [slidesCount, setSlidesCount] = useState(null);
    let current_slide = 0;

    useEffect(() => {
        getGames();
    }, [slides])


    const getGames = async () => {
        Firebase.db.ref('games').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let items = {...data};
            setGames(items);
        })
    }

    const prevPage = () => {
        let slides_count = slides.length;
        current_slide--;
        if (current_slide < 0) {
            current_slide = slides_count - 1;
        }

        updateCarousel();
    }

    const nextPage = () => {
        let slides_count = slides.length;
        current_slide++;
        if (current_slide > slides_count - 1) {
            current_slide = 0;
        }

        updateCarousel();
    }

    const updateCarousel = () => {
        let carousel = document.getElementById("carousel");
        carousel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;
    }

    if (games !== null && games !== undefined) {
        return (
            <>
            <div className="carouselContainer">
                <div className="carousel" id="carousel">
                    {Object.keys(games).map(item => {
                        return (                               
                            <Slide slides={setSlides} count={setSlidesCount}>
                                <img src={games[item]["img_url"]} />
                                <h1>{games[item]["name"]}</h1>
                                <a href="#">View Status</a>
                            </Slide>
                        )
                        
                    })}
                </div>
                <FontAwesomeIcon
                    className="arrow"
                    id="leftArrow"
                    icon={faChevronLeft}
                    size="3x"
                    color="#000"
                    onClick={() => prevPage()}
                />
                <FontAwesomeIcon
                    className="arrow"
                    id="rightArrow"
                    icon={faChevronRight}
                    size="3x"
                    color="#000"
                    onClick={() => nextPage()}
                />
            </div>
            <a href="#" className="hamburger">
                <FontAwesomeIcon
                    icon={faBars}
                    size="3x"
                    color="#fff"
                />
            </a>
            </>
        )
        
    } else {
        return <h1>Loading...</h1>
    }

}


export default Games;