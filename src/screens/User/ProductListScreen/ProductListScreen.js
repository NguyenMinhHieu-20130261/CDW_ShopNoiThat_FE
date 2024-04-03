import React, {useState} from "react";
import Header from "../../../component/Navigator/Header";
import Footer from "../../../component/Navigator/Footer";
import CATE from "../../../assets/home/cate-home1.webp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import "./ProductListScreen.css";

const ProdFilter = ({ filters, filterOptions, onFilterChange }) => {
    return (
        <div className="prod-filter">
            <div className="filter-txt">
                <p>Bộ lọc</p>
                <div className="vertical-divider"/>
            </div>
            {/* Category filter */}
            <select value={filters.category} onChange={e => onFilterChange('category', e.target.value)}>
                <option value="">Danh Mục</option>
                {filterOptions.categories.map(category => (
                    <option key={category.value} value={category.value}>{category.label}</option>
                ))}
            </select>

            {/* Price filter */}
            <select value={filters.price} onChange={e => onFilterChange('price', e.target.value)}>
                <option value="">Giá Sản Phẩm</option>
                {filterOptions.prices.map(price => (
                    <option key={price.value} value={price.value}>{price.label}</option>
                ))}
            </select>

            {/* Color filter */}
            <select value={filters.color} onChange={e => onFilterChange('color', e.target.value)}>
                <option value="">Màu Sắc</option>
                {filterOptions.colors.map(color => (
                    <option key={color.value} value={color.value}>{color.label}</option>
                ))}
            </select>

            {/* Size filter */}
            <select value={filters.size} onChange={e => onFilterChange('size', e.target.value)}>
                <option value="">Kích cỡ</option>
                {filterOptions.sizes.map(size => (
                    <option key={size.value} value={size.value}>{size.label}</option>
                ))}
            </select>
        </div>
    );
}
const ProductList = ({ filters }) => {
    return (
        <div className="home-cate">
            <div className="hc-wrapper">
                <div className="pdf-container">
                    <div className="filter-row">
                        <div className="flash-prod">
                            <img src={CATE} alt="Product 1"/>
                            <div className="fprod-detail">
                                <div className="top">
                                    <div className="name">Ghế Sofa</div>
                                </div>
                                <div className="middle">
                                    <div className="left">
                                        <div className="price">100.000đ</div>
                                        <div className="review">Đánh giá: <b>4.5</b> (69) </div>
                                    </div>
                                    <div className="right">
                                        <div className="sold">Đã bán: 100</div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="left-icon">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </div>
                                    <div className="right-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-prod">
                            <img src={CATE} alt="Product 1"/>
                            <div className="fprod-detail">
                                <div className="top">
                                    <div className="name">Ghế Sofa</div>
                                </div>
                                <div className="middle">
                                    <div className="left">
                                        <div className="price">100.000đ</div>
                                        <div className="review">Đánh giá: <b>4.5</b> (69) </div>
                                    </div>
                                    <div className="right">
                                        <div className="sold">Đã bán: 100</div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="left-icon">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </div>
                                    <div className="right-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-prod">
                            <img src={CATE} alt="Product 1"/>
                            <div className="fprod-detail">
                                <div className="top">
                                    <div className="name">Ghế Sofa</div>
                                </div>
                                <div className="middle">
                                    <div className="left">
                                        <div className="price">100.000đ</div>
                                        <div className="review">Đánh giá: <b>4.5</b> (69) </div>
                                    </div>
                                    <div className="right">
                                        <div className="sold">Đã bán: 100</div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <div className="left-icon">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </div>
                                    <div className="right-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flash-prod">
                            <img src={CATE} alt="Product 1"/>
                            <div className="fprod-detail">
                                <div className="top">
                                    <div className="name">Ghế Sofa</div>
                                </div>
                                <div className="middle">
                                    <div className="left">
                                        <div className="price">100.000đ</div>
                                        <div className="review">Đánh giá: <b>4.5</b> (69) </div>
                                    </div>
                                    <div className="right">
                                        <div className="sold">Đã bán: 100</div>
                                    </div>
                                </div>
                                <div className="bottom">
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
const ProductListScreen = () => {
    const [filters, setFilters] = useState({
        category: '',
        price: '',
        color: '',
        size: ''
    });
    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };
    // Giá trị test
    const filterOptions = {
        categories: [
            { value: 'bàn', label: 'Bàn' },
            { value: 'ghế', label: 'Ghế' },
            { value: 'tủ', label: 'Tủ' },
            { value: 'đặc biệt', label: 'đặc biệt' },
        ],
        prices: [
            { value: '0-500.000đ', label: '0-500.000đ' },
            { value: '500.000đ - 1.000.000đ', label: '500.000đ - 1.000.000đ' },
            { value: '500.000đ - 1.000.000đ', label: '500.000đ - 1.000.000đ'},
        ],
        colors: [
            { value: 'nâu', label: 'nâu' },
            { value: 'vàng', label: 'vàng' },
            { value: 'đỏ', label: 'đỏ' },
        ],
        sizes: [
            { value: '90cm', label: '90cm' },
            { value: '1m2', label: '1m2' },
            { value: '1m4', label: '1m4' },
            { value: '1m6', label: '1m6' },
        ]
    };

    return (
        <div className="prod-list-container">
            <Header/>
            <div className="content-container">
                <div className="prod-main-txt">
                    Sản Phẩm Mới
                </div>
                <ProdFilter filters={filters} filterOptions={filterOptions} onFilterChange={handleFilterChange} />
                <ProductList filters={filters} />
            </div>
            <Footer/>
        </div>
    )
}
export default ProductListScreen;