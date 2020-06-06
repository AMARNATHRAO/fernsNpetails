import _ from 'lodash';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FETCH_PRODUCTS_FULFILLED': {
      const newState = _.cloneDeep(state.products);
      const updatedProducts = [...newState, ...payload];
      return {
        ...state,
        products: updatedProducts,
        productsFetched: true,
      };
    }
    case 'FETCH_PRODUCTS_FAILED': {
      return {
        ...state,
        err: payload,
        productsFetched: true,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default productsReducer;
