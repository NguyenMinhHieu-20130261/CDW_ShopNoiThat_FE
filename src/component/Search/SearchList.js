import CATE from "../../assets/home/cate-home1.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const SearchList = ({ filters }) => {
    return (
        <div className="srch-list">
            <div className="hc-wrapper">
                <div className="srch-container">
                    <div className="srch-row">
                        <div className="srch-prod">
                            <img src={CATE} alt="Product 1"/>
                            <div className="fprod-detail">
                                <div className="srch-top">
                                    <div className="srch-name">Ghế Sofa</div>
                                </div>
                                <div className="srch-middle">
                                    <div className="srch-left">
                                        <div className="srch-price">100.000đ</div>
                                        <div className="srch-review">Đánh giá: <b>4.5</b> (69) </div>
                                    </div>
                                    <div className="srch-right">
                                        <div className="srch-sold">Đã bán: 100</div>
                                    </div>
                                </div>
                                <div className="srch-bottom">
                                    <div className="left-icon">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </div>
                                    <div className="right-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="srch-prod">
                            <img src={CATE} alt="Product 1"/>
                            <div className="fprod-detail">
                                <div className="srch-top">
                                    <div className="srch-name">Ghế Sofa</div>
                                </div>
                                <div className="srch-middle">
                                    <div className="srch-left">
                                        <div className="srch-price">100.000đ</div>
                                        <div className="srch-review">Đánh giá: <b>4.5</b> (69) </div>
                                    </div>
                                    <div className="srch-right">
                                        <div className="srch-sold">Đã bán: 100</div>
                                    </div>
                                </div>
                                <div className="srch-bottom">
                                    <div className="left-icon">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </div>
                                    <div className="right-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="srch-prod">
                            <img src={CATE} alt="Product 1"/>
                            <div className="fprod-detail">
                                <div className="srch-top">
                                    <div className="srch-name">Ghế Sofa</div>
                                </div>
                                <div className="srch-middle">
                                    <div className="srch-left">
                                        <div className="srch-price">100.000đ</div>
                                        <div className="srch-review">Đánh giá: <b>4.5</b> (69) </div>
                                    </div>
                                    <div className="srch-right">
                                        <div className="srch-sold">Đã bán: 100</div>
                                    </div>
                                </div>
                                <div className="srch-bottom">
                                    <div className="left-icon">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </div>
                                    <div className="right-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="srch-prod">
                            <img src={CATE} alt="Product 1"/>
                            <div className="fprod-detail">
                                <div className="srch-top">
                                    <div className="srch-name">Ghế Sofa</div>
                                </div>
                                <div className="srch-middle">
                                    <div className="srch-left">
                                        <div className="srch-price">100.000đ</div>
                                        <div className="srch-review">Đánh giá: <b>4.5</b> (69) </div>
                                    </div>
                                    <div className="srch-right">
                                        <div className="srch-sold">Đã bán: 100</div>
                                    </div>
                                </div>
                                <div className="srch-bottom">
                                    <div className="left-icon">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </div>
                                    <div className="right-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchList;
