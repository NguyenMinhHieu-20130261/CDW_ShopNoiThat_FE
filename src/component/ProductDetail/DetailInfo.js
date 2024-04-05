import StarRating from "../StarRating/StarRatingComponent";
import ProductColor from "./ProductColor";
import React from "react";

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
export default DetailInfo;