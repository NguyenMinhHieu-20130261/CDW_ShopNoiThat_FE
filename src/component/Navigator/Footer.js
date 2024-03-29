import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navigator.css";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container" style={{width: "100%"}}>
                <div className="row">
                    <div className="col footer-col">
                        <div className="col">
                            <p className="footer-title"> Kết nối với SHOP NT</p>
                        </div>
                        <div className="horizontal-divider"/>
                        <div className="col">
                            <div className="row">
                                <p>
                                    Theo dõi chúng tôi:
                                </p>
                                <p>
                                    Instagram
                                </p>
                                <p>
                                    Facebook
                                </p>
                                <p>
                                    Youtube
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col">
                            <p className="footer-title"> SẢN PHẨM CHÚNG TÔI</p>
                        </div>
                        <div className="horizontal-divider"/>
                        <div className="col">
                            <div className="row">
                                <p>
                                    Bàn
                                </p>
                                <p>
                                    Ghế
                                </p>
                                <p>
                                    Các vật dụng khác
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col">
                            <p className="footer-title"> VỀ CHÚNG TÔI</p>
                        </div>
                        <div className="horizontal-divider"/>
                        <div className="col">
                            <div className="row au-txt">
                                <p>
                                    Giới thiệu
                                </p>
                                <p>
                                    Instagram
                                    </p>
                                <p>
                                    Facebook
                                </p>
                                <p>
                                    Youtube
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col">
                            <p className="footer-title"> NEWSLETTER</p>
                        </div>
                        <div className="horizontal-divider"/>
                        <div className="col">
                            <div className="row au-txt">
                                <p>
                                    Hãy để lại email của bạn để nhận được những ý tưởng trang trí mới
                                    và những thông tin, ưu đãi từ Nhà Xinh
                                </p>
                                <p>Email: nhaxinhcare@akacompany.com.vn</p>
                                <p>Hotline: 18007200</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;