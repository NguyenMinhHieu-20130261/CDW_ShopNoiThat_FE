import React from "react";

const ProductColor = ({ color }) => {
    const colorStyle = {
        backgroundColor: color,
        width: '90%',
        height: '90%',
        borderRadius: '50%',
    };
    return(
        <div className="dt-color">
            <div className="color-container">
                <div style={colorStyle}/>
            </div>
            <p className="star-txt">{color}</p>
        </div>

    )
};
export default ProductColor;
