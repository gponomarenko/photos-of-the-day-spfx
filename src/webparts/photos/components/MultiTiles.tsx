import * as React from 'react';
import styles from './Photos.module.scss';
import Slider from "react-slick";

export default function MultiTiles({
  slidesToShow
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: {slidesToShow},
    slidesPerRow: {slidesToShow},
  };

  return (
      <div className='photos__box'>
        <h2> Multiple items </h2>
        <Slider {...settings}>
            <div>
              <img src="https://placekitten.com/g/100/100" alt="kitten1" className="img" />
            </div>
            <div>
              <img src="https://placekitten.com/g/101/101" alt="kitten1" className="img" />
            </div>
        </Slider>
      </div>
    );
}