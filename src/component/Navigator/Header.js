import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Navigator.css";
import {Link} from "react-router-dom";


const MainCategory = () =>{
    return (
        <div className="main-category">
            <p >Test main cate</p>
            <ul>
                <li><Link to={'/product'} className="no-decor sub-cate-txt">Sofas</Link></li>
                <li><a href="123" className="sub-cate-txt">Sofas</a></li>
                <li><a href="123" className="sub-cate-txt">Sofas</a></li>
            </ul>
        </div>
    )
}
const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Logo"  />
                <Link to={'/'} className="no-decor logo-txt">Shop Nội Thất</Link>
            </div>
            <div className="categories">
                <div className="cate-container">
                    <MainCategory/>
                    <MainCategory/>
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