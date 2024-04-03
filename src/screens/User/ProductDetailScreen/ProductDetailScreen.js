import React, { useMemo,useState, useEffect} from 'react';
import Slider from 'react-slick';
import Header from "../../../component/Navigator/Header";
import Footer from "../../../component/Navigator/Footer";
// slider
import SLIDER1 from '../../../assets/slider/slider1.webp'
import SLIDER2 from '../../../assets/slider/slider2.webp'
import SLIDER3 from '../../../assets/slider/slider3.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./ProductDetailScreen.css";

const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FontAwesomeIcon icon={faStar} key={i} color="gold" />);
        } else {
            stars.push(<FontAwesomeIcon icon={faStar} key={i} color="gray" />);
        }
    }

    return (
        <div>
            {stars}
        </div>
    );
};
const ProductColor = ({ color }) => {
    const colorStyle = {
        backgroundColor: color,
        width: '90%',
        height: '90%',
        borderRadius: '50%',
    };
    return(
        <div className="dt-color">
            <div className="color-container">
                <div style={colorStyle}/>
            </div>
            <p className="star-txt">{color}</p>
        </div>

    )
};

const DetailImage = () => {
    const [bigImage, setBigImage] = useState('');
    const images = useMemo(() => [SLIDER1, SLIDER2, SLIDER3], []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const showBigImage = (imageSrc) => {
        setBigImage(imageSrc);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = images.indexOf(bigImage);
            const nextIndex = (currentIndex + 1) % images.length;
            setBigImage(images[nextIndex]);
        }, 3000);
        return () => clearInterval(interval);
    }, [bigImage, images]);

    return (
            <div className="prod-images">
                <div className="big-image">
                    <img src={bigImage || images[0]} alt="" />
                </div>
                <Slider className="detail-slider" {...settings}>
                    {images.map((image, index) => (
                        <div key={index} onClick={() => showBigImage(image)}  className={bigImage === image ? "active-thumbnail" : ""} >
                            <img src={image} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
    );
}
const DetailInfo = () => {
    return(
        <div className="prod-details">
            <div className="dt-name">
                <p>Ghế Sofa Gỗ Tràm Tự Nhiên MOHO VLINE 601</p>
                <div className="dt-rating">
                    <StarRating rating="4"/>
                    <b>(4)</b>
                </div>
            </div>
            <div className="horizontal-divider"/>
            <div className="dt-price">
                <div className="sale-info">
                    <span className="sale-percent">-30%</span>
                    <span className="old-price">1.000.000đ</span>
                    <span className="origin-price">700.000đ</span>
                </div>
            </div>
            <div className="horizontal-divider"/>
            <div className="dt-color">
                <ProductColor color="brown"/>
            </div>
            <div className="horizontal-divider"/>
            <div className="dt-info">
                <div className="dt-desc">
                    <p className="">

                    </p>
                </div>
            </div>
        </div>
    )
}

const ProductDetailScreen = () => {
    return (
        <div className='detail-container'>
            <Header/>
            <div className="content-container">
                <div className="prod-detail-container">
                    <DetailImage/>
                    <DetailInfo/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default ProductDetailScreen
;