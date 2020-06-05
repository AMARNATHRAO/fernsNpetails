const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_PRODUCTS_FULFILLED": {
      return {
        ...state,
        products: payload,
        productsFetched: true,
      };
    }
    case "FETCH_PRODUCTS_FAILED": {
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
