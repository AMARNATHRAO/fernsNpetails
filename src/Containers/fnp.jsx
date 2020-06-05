import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../Actions/FNPActions';
import FNPProduct from '../Components/fnpProduct';
import '../App.css';
import fnpLogo from '../Images/fnp.jpg';

const mapStateToProps = (store) => ({
  products: store.fnp.products,
});

const mapDispatchToProps = {
  fetchFnpProducts: fetchProducts,
};

class fnp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { fetchFnpProducts } = this.props;
    fetchFnpProducts();
  }

  loadProducts() {
    const { products } = this.props;

    const productsHtml = products.map((product, index) => {
      return <FNPProduct key={index + 1} index={index} product={product} />;
    });
    return <div className="row">{productsHtml}</div>;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-0"></div>
          <div className="col-md-4col-md-4 col-sm-4 col-xs-12">
            <div className="header-green">
              <span className="glyphicon glyphicon-align-justify" style={{ color: '#fff', paddingRight: '5px' }}></span>
              <span className="logo">
                ferns<b>N</b>petals
                {/* <img src={fnpLogo} alt="" /> */}
              </span>
            </div>
            <div style={{ paddingTop: '5px' }}>{this.loadProducts()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(fnp);
