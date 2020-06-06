import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { fetchProducts } from '../Actions/FNPActions';
import FNPProduct from '../Components/fnpProduct';
import '../App.css';

const mapStateToProps = (store) => ({
  products: store.fnp.products,
});

const mapDispatchToProps = {
  fetchFnpProducts: fetchProducts,
};

class fnp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenuIcons: false,
    };
    this.menuIconsToggle = this.menuIconsToggle.bind(this);
  }

  componentDidMount() {
    const { fetchFnpProducts } = this.props;
    fetchFnpProducts();
  }

  loadProducts() {
    const { products, fetchFnpProducts } = this.props;
    if (products && products.length > 0) {
      const productsHtml = products.map((product, index) => {
        return <FNPProduct key={index + 1} index={index} product={product} />;
      });
      return (
        <>
          <div className="row">
            <InfiniteScroll
              hasMore={true}
              initialLoad={false}
              useWindow={true}
              threshold={250}
              loadMore={() => {
                fetchFnpProducts();
              }}
            >
              {productsHtml}
            </InfiniteScroll>
          </div>
        </>
      );
    }
    return <div style={{ textAlign: 'center' }}>No Products</div>;
  }

  menuIconsToggle() {
    const { showMenuIcons } = this.state;
    this.setState({
      showMenuIcons: !showMenuIcons,
    });
  }

  render() {
    const { showMenuIcons } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-0"></div>
          <div className="col-md-4col-md-4 col-sm-4 col-xs-12">
            <div className="header-green">
              <div className="dropdown" style={{ display: 'inline-block' }}>
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  onClick={this.menuIconsToggle}
                  onBlur={this.menuIconsToggle}
                >
                  <span
                    className="glyphicon glyphicon-align-justify"
                    style={{ color: '#fff', paddingRight: '5px' }}
                  ></span>
                </button>
                <ul className={showMenuIcons ? 'show-dropdown' : 'dont-show-dropdown'}>
                  <li className="dropdown-li-element">
                    <a
                      href="https://www.fnp.com/?utm_source=affiliate&utm_medium=Banner&utm_campaign=icubes_177_A1"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: '#fff', paddingBottom: '5px' }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="dropdown-li-element">
                    <a
                      href="https://www.fnp.com/info/about-us"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: '#fff', paddingBottom: '5px' }}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="dropdown-li-element">
                    <a
                      href="https://www.fnp.com/cakes?promo=cakes_tab_dt_hm"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: '#fff', paddingBottom: '5px' }}
                    >
                      Cakes
                    </a>
                  </li>
                  <li className="dropdown-li-element">
                    <a
                      href="https://www.fnp.com/flowers?promo=flowers_tab_dt_hm"
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ textDecoration: 'none', color: '#fff', paddingBottom: '5px' }}
                    >
                      Flowers
                    </a>
                  </li>
                </ul>
              </div>
              <span className="logo">
                ferns<b>N</b>petals
              </span>
            </div>
            <div style={{ paddingTop: '51px', position: 'relative', paddingBottom: '5px' }}>{this.loadProducts()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(fnp);
