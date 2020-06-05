import React, { Component } from 'react';
import _ from 'lodash';
import '../App.css';

export class fnpProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getPrice() {
    const { product } = this.props;
    const sellingPrice = _.get(product, 'sellingPrice', 0);
    const discountPercentage = _.get(product, 'discountPercentage', 0);
    const discountValue = discountPercentage / 100;
    let totalValue = sellingPrice - sellingPrice * discountValue;
    totalValue = totalValue.toFixed(2);
    return <div className="cake-cost">₹ {totalValue || 0}</div>;
  }

  getProductClassName() {
    const { index: key } = this.props;
    if (key % 2 === 0) {
      return 'right-col-css';
    } else if (key % 2 === 1) {
      return 'left-col-css';
    }
    return '';
  }

  render() {
    const { product } = this.props;
    let productClassName = this.getProductClassName();
    productClassName = `col-md-6 ${productClassName}`;
    return (
      <div className={productClassName}>
        <div className="parent-grid-panel">
          <a href={product.landingPage} rel="noopener noreferrer" target="_blank">
            <img src={product.imgSrc || ''} alt="" className="panel-img" />
          </a>
          {product.bestSeller && <div className="best-seller-label">BEST SELLER</div>}
          <div style={{ height: '85px' }}>
            <div className="cake-name">{product.title || ''}</div>
            {this.getPrice()}
            {product.discountPercentage ? (
              <div>
                <span className="cake-off-percentage">{product.discountPercentage}% OFF</span>
                <span className="cake-off-amount"> off ₹ {product.sellingPrice || 0}</span>
              </div>
            ) : (
              <div>
                <span className="cake-off-percentage" />
                <span className="cake-off-amount" />
              </div>
            )}
          </div>
          <div>
            <span className="checked">{product.ratingCount || 0}</span>
            &nbsp;
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            &nbsp;
            {product.reviewCount && <span>{product.reviewCount} Reviews</span>}
          </div>
        </div>
      </div>

      // <div>
      //   <a href={product.landingPage} rel="noopener noreferrer" target="_blank">
      //     <img src={product.imgSrc || ''} alt="" />
      //   </a>
      //   {product.bestSeller && <div>BEST SELLER</div>}
      //   <div>{product.title || ''}</div>
      //   <div>₹{product.sellingPrice || 0}</div>
      //   {this.getPrice()}
      //   {product.discountPercentage && <div>{product.discountPercentage}% OFF</div>}
      //   {product.reviewCount && <div>{product.reviewCount} Reviews</div>}
      // </div>
    );
  }
}

export default fnpProduct;
