import React from 'react';
// import PropTypes from 'prop-types';

import Flag from '../flags/flag';
import Heading from '../headings/heading';
import Button from '../buttons/button';

import './card.scss';


class ProductSetcard extends React.Component {
  render () {
    return (
      <div className="product-setcard">
        <div className="product-setcard__img">
          <Flag text="20% Off" color="cyan" />
          <img src="https://d2dfnis7z3ac76.cloudfront.net/shure_product_db/product_main_images/files/595/f9a/5f-/setcard_transparent/9aefccb214ad6f4f4c7aacca8de9cf42.png" alt="" />
        </div>
        <div className="product-setcard__info">
          <div className="product-setcard__info-head">
            <Heading level="h4">SE425</Heading>
            <Heading level="h6" styles="light">Sound Isolating™ Earphones</Heading>
          </div>
          <p>The SE425 is the earphone that shows you how your favorite artists hear music, when accuracy is important and range is imperative.</p>
          <div className="product-setcard__info-foot">
            <div class="product-setcard__info-price">
              from <span>$2,999</span>
            </div>
            <Button styles="button--tile" text="Add To Cart" />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSetcard;