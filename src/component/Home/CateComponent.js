import React from "react";
import CATE from "../../assets/home/cate-home1.webp"
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
export default CateComponent;