import React from "react";
import Slider from 'react-slick';

//slider
import SLIDER1 from '../../assets/slider/slider1.webp'
import SLIDER2 from '../../assets/slider/slider2.webp'
import SLIDER3 from '../../assets/slider/slider3.webp'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from "react-router-dom";

//SLIDER
const SliderComponent =() => {
    const images = [SLIDER1, SLIDER2, SLIDER3]
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <Slider {...settings} className="slider-container">
            {images.map((item, index) => (
                <div className="slider" key={index}>
                    <img src={item} alt={`Slider ${index}}`}/>
                </div>
            ))}
        </Slider>
    )
}
export default SliderComponent;