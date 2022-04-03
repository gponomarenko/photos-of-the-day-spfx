import * as React from 'react';
import styles from './Photos.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mySlick.css"
import Slider from "react-slick";

export class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      className: "styles.slideBox"
    };
    return (
      <div className={styles.container2}>
        <Slider {...settings}>
          <div className={styles.imageFrame}>
            <img src="http://placekitten.com/g/200/200" />
          </div>
          <div className={styles.imageFrame}>
            <img src="http://placekitten.com/g/201/201" />
          </div>
          <div className={styles.imageFrame}>
            <img src="http://placekitten.com/g/202/202" />
          </div>
          <div className={styles.imageFrame}>
            <img src="http://placekitten.com/g/203/203" />
          </div>
          <div className={styles.imageFrame}>
            <img src="http://placekitten.com/g/204/204" />
          </div>
          <div className={styles.imageFrame}>
            <img src="http://placekitten.com/g/205/205" />
          </div>
          <div className={styles.imageFrame}>
            <img src="http://placekitten.com/g/206/206" />
          </div>
          <div className={styles.imageFrame}>
            <img src="http://placekitten.com/g/207/207" />
          </div>
          <div className={styles.imageFrame}>
            <img src="http://placekitten.com/g/208/208" />
          </div>
        </Slider>
      </div>
    );
  }
}