import React from "react";
import Header from "../../../component/Navigator/Header";
import Footer from "../../../component/Navigator/Footer";
import "./ProductDetailScreen.css";

const ProductDetailScreen = () => {
    return (
        <div className='prod-list-container'>
            <Header/>
            <div className="prod-list-content"> testing prod list screen</div>
            <Footer/>
        </div>
    );
}
export default ProductDetailScreen
;