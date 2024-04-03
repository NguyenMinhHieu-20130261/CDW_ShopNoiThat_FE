import React from "react";
import Header from "../../../component/Navigator/Header";
import Footer from "../../../component/Navigator/Footer";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

//slider
import SLIDER1 from '../../../assets/slider/slider1.webp'
import SLIDER2 from '../../../assets/slider/slider2.webp'
import SLIDER3 from '../../../assets/slider/slider3.webp'
import CATE from '../../../assets/home/cate-home1.webp'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./HomeScreen.css";
import {Link} from "react-router-dom";

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
const CateComponent = () => {
    return (
            <div className="home-cate">
                <div className="hc-txt">
                    <p> Không Gian Sống Cùng Với MOHO</p>
                </div>
                <div className="hc-wrapper">
                    <div className="left-column">
                        <div className="left-content">
                            <img src={CATE} alt="Category 1"/>
                            <div className="category-name">Category 1</div>
                        </div>
                        <div className="left-content">
                            <img src={CATE} alt="Category 1"/>
                            <div className="category-name">Category 1s
                            </div>
                        </div>
                    </div>
                    <div className="right-column">
                        <div className="top-row">
                            <div className="top-cate">
                                <img src={CATE} alt="Category 1"/>
                                <div className="category-name">Category 1</div>
                            </div>
                        </div>
                        <div className="bottom-row">
                            <div className="bottom-cate">
                                <img src={CATE} alt="Category 1"/>
                                <div className="category-name">Category 1</div>
                            </div>
                            <div className="bottom-cate">
                                <img src={CATE} alt="Category 1"/>
                                <div className="category-name">Category 1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
const ProdFlash = () => {
    return (
        <div className="flash-row">
            <Link  to={'/detail'} className="flash-prod">
                <img src={CATE} alt="Product 1"/>
                <div className="fprod-detail">
                    <div className="top">
                        <div className="name">Ghế Sofa</div>
                    </div>
                    <div className="middle">
                        <div className="left">
                            <div className="price">100.000đ</div>
                            <div className="review">Đánh giá: <b>4.5</b> (69) </div>
                        </div>
                        <div className="right">
                            <div className="sold">Đã bán: 100</div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                        <div className="right-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                </div>
            </Link>
            <Link  to={'/detail'} className="flash-prod">
                <img src={CATE} alt="Product 1"/>
                <div className="fprod-detail">
                    <div className="top">
                        <div className="name">Ghế Sofa</div>
                    </div>
                    <div className="middle">
                        <div className="left">
                            <div className="price">100.000đ</div>
                            <div className="review">Đánh giá: <b>4.5</b> (69) </div>
                        </div>
                        <div className="right">
                            <div className="sold">Đã bán: 100</div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                        <div className="right-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                </div>
            </Link>
            <Link  to={'/detail'} className="flash-prod">
                <img src={CATE} alt="Product 1"/>
                <div className="fprod-detail">
                    <div className="top">
                        <div className="name">Ghế Sofa</div>
                    </div>
                    <div className="middle">
                        <div className="left">
                            <div className="price">100.000đ</div>
                            <div className="review">Đánh giá: <b>4.5</b> (69) </div>
                        </div>
                        <div className="right">
                            <div className="sold">Đã bán: 100</div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                        <div className="right-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                </div>
            </Link>
            <Link  to={'/detail'} className="flash-prod">
                <img src={CATE} alt="Product 1"/>
                <div className="fprod-detail">
                    <div className="top">
                        <div className="name">Ghế Sofa</div>
                    </div>
                    <div className="middle">
                        <div className="left">
                            <div className="price">100.000đ</div>
                            <div className="review">Đánh giá: <b>4.5</b> (69) </div>
                        </div>
                        <div className="right">
                            <div className="sold">Đã bán: 100</div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>
                        <div className="right-icon">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
const FlashSaleComponent = () => {
  return(
      <div className="home-cate">
          <div className="hc-txt">
              <p> Giảm Giá</p>
          </div>
          <div className="hc-wrapper">
              <div className="pdf-container">
                  <ProdFlash/>
                  <ProdFlash/>
              </div>
          </div>
      </div>
  )
}
const HomeScreen = () => {
      return (
      <div className='home-container'>
          <Header/>
          <SliderComponent/>
          <div className="content-container">
              {/*SLIDER*/}
              {/*CATE COMPONENT*/}
              <CateComponent/>
              {/*FLASH SALE*/}
              <FlashSaleComponent/>
          </div>
          <Footer/>
      </div>
      );
}
export default HomeScreen;