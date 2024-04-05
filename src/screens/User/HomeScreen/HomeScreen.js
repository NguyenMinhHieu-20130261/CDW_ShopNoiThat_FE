import React from "react";

import Header from "../../../component/Navigator/Header";
import Footer from "../../../component/Navigator/Footer";
import SliderComponent from "../../../component/Home/SliderComponent";
import CateComponent from "../../../component/Home/CateComponent";
import FlashSaleComponent from "../../../component/Home/FlashSaleComponent";

import "./HomeScreen.css";

const HomeScreen = () => {
      return (
      <div className='home-container'>
          <Header/>
          {/*SLIDER*/}
          <SliderComponent/>
          <div className="content-container">
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