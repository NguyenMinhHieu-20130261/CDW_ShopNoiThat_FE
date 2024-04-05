import React from "react";

const SearchFilter = ({ filters, filterOptions, onFilterChange }) => {

    return (
        <div className="srch-filter">
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
export default SearchFilter;
