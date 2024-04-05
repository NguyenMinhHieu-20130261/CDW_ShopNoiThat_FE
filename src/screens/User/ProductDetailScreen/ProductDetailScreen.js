import React from 'react';
import Header from "../../../component/Navigator/Header";
import Footer from "../../../component/Navigator/Footer";
import DetailImage from "../../../component/ProductDetail/DetailImage";
import DetailInfo from "../../../component/ProductDetail/DetailInfo";
import "./ProductDetailScreen.css";

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
export default ProductDetailScreen;