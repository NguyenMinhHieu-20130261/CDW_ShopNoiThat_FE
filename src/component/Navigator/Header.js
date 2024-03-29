import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Navigator.css";
// const categoriesData = [
//     {
//         name: 'Living Room',
//         children: ['Sofas', 'Chairs', 'Coffee Tables']
//     },
//     {
//         name: 'Bedroom',
//         children: ['Beds', 'Mattresses', 'Dressers']
//     },
//     {
//         name: 'Kitchen',
//         children: ['Tables', 'Chairs', 'Cabinets']
//     },
//     {
//         name: 'Office',
//         children: ['Desks', 'Chairs', 'Bookcases']
//     }
// ];
const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Logo"  />
                <span className="logo-txt">Shop Nội Thất</span>
            </div>
            <div className="categories">
                <div className="cate-container">
                    <div className="main-category">
                        <p >Test main cate</p>
                        <ul>
                            <li><a href="123" className="sub-cate-txt">Sofas</a></li>
                            <li><a href="123" className="sub-cate-txt">Sofas</a></li>
                            <li><a href="123" className="sub-cate-txt">Sofas</a></li>
                        </ul>
                    </div>
                    <div className="main-category">
                        <p >Test main cate</p>
                        <ul>
                            <li><a href="123" className="sub-cate-txt">Sofas</a></li>
                            <li><a href="123" className="sub-cate-txt">Sofas</a></li>
                            <li><a href="123" className="sub-cate-txt">Sofas</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Tìm sản phẩm..." />
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className="user-icon">
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
}
export default Header;