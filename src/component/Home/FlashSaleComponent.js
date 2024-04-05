import React from "react";
import {Link} from "react-router-dom";
import CATE from "../../assets/home/cate-home1.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
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
export default FlashSaleComponent;