import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent(){
    return (
        <div class="carousel-wrapper">
            <Carousel>
            <h1>Photo Carousel</h1>
            <div>
                <img src="img-1.jpg" />
                <p className="legend">Rome</p>
            </div>
            <div>
                <img src="img-2.jpg" /> 
                <p className="legend">Las Vegas</p>
            </div>
            <div>
                <img src="img-3.jpg" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="img-4.jpg" />
                <p className="legend">Macao</p>
            </div>
            </Carousel>
        </div>
    );
}