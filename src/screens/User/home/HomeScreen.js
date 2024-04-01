import React from "react";
import Header from "../../../component/Navigator/Header";
import Footer from "../../../component/Navigator/Footer";
const HomeScreen = () => {
    return (
    <div className='home-container'>
        <Header/>
        <div className="home-content"> testing home screen</div>
        <Footer/>
    </div>
    );
}
export default HomeScreen;