import { render, shallow } from 'enzyme';
import React from 'react';

import FNPProduct from '../../Components/fnpProduct';

it('should render Profile Skills', () => {
  const wrapper = shallow(<FNPProduct />);
  expect(wrapper).toMatchSnapshot();
});
