import React, {useEffect, useMemo, useState} from "react";
import SLIDER1 from "../../assets/slider/slider1.webp";
import SLIDER2 from "../../assets/slider/slider2.webp";
import SLIDER3 from "../../assets/slider/slider3.webp";
import Slider from "react-slick";

const DetailImage = () => {
    const [bigImage, setBigImage] = useState('');
    const images = useMemo(() => [SLIDER1, SLIDER2, SLIDER3], []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const showBigImage = (imageSrc) => {
        setBigImage(imageSrc);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            const currentIndex = images.indexOf(bigImage);
            const nextIndex = (currentIndex + 1) % images.length;
            setBigImage(images[nextIndex]);
        }, 3000);
        return () => clearInterval(interval);
    }, [bigImage, images]);

    return (
        <div className="prod-images">
            <div className="big-image">
                <img src={bigImage || images[0]} alt="" />
            </div>
            <Slider className="detail-slider" {...settings}>
                {images.map((image, index) => (
                    <div key={index} onClick={() => showBigImage(image)}  className={bigImage === image ? "active-thumbnail" : ""} >
                        <img src={image} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default DetailImage;