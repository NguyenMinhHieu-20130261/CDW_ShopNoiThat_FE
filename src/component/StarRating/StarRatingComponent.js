import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from "react";

const StarRating = ({ rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FontAwesomeIcon icon={faStar} key={i} color="gold" />);
        } else {
            stars.push(<FontAwesomeIcon icon={faStar} key={i} color="gray" />);
        }
    }
    return (
        <div>
            {stars} 
        </div>
    );
};
export default StarRating;