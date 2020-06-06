import { shallow } from 'enzyme';
import React from 'react';

import FNPProduct from '../../src/Components/fnpProduct';

it('should render fnpProduct component', () => {
  const product = {
    sku: 'CAK1274',
    title: 'Crunchy Kit Kat Cake',
    sellingPrice: 999,
    ratingCount: 4.3,
    reviewCount: 88,
    imgSrc: 'https://m-i7.fnp.com/images/pr/m/crunchy-kit-kat-cake.jpg',
    landingPage: 'https://m.fnp.com/gift/crunchy-kit-kat-cake',
  };

  const wrapper = shallow(<FNPProduct product={product} />);
  expect(wrapper.exists()).toBeTruthy();
});

it('should not render fnpProduct component as product is {} object ', () => {
  const product = {};

  const wrapper = shallow(<FNPProduct product={product} />);
  expect(wrapper.exists('parent-grid-panel')).toBeFalsy();
});

it('should not render fnpProduct component as product is undefined object ', () => {
  const wrapper = shallow(<FNPProduct />);
  expect(wrapper.exists('parent-grid-panel')).toBeFalsy();
});
