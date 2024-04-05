import React, {useState} from "react";
import Header from "../../../component/Navigator/Header";
import Footer from "../../../component/Navigator/Footer";
import SearchFilter from "../../../component/Search/SearchFilter";
import SearchList from "../../../component/Search/SearchList";

import "./SearchScreen.css";

const SearchScreen = () => {
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
        <div className="srch-list-container">
            <Header/>
            <div className="content-container">
                <div className="srch-main-txt">
                    Từ khóa tìm kiếm:
                    <p>bàn</p>
                </div>
                <SearchFilter filters={filters} filterOptions={filterOptions} onFilterChange={handleFilterChange} />
                <SearchList filters={filters} />
            </div>
            <Footer/>
        </div>
    )
}
export default SearchScreen;