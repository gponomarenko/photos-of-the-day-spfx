import * as React from 'react';
import styles from './Photos.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mySlick.css";
import Slider from "react-slick";

export interface IMultiTilesProps {
  items: string[];
  itemsPerView: number;
}

export class MultiTiles extends React.Component<IMultiTilesProps> {
  public render() {
    var settings = {
      dots: true,
      arrows: false,
      infinite: false,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: this.props.itemsPerView,
      slidesToScroll: this.props.itemsPerView,
      className: "styles.slideBox"
    };

    return (
      <div className={styles.container2}>
        <Slider {...settings}>
          {this.props.items.map((item) => (
            <div className={styles.imageFrame}>
            <img src={item} />
          </div>
          ))}
        </Slider>
      </div>
    );
  }
}