import * as FNPRepository from '../Repository/FNPRepository';

let APICallCount = 0;

export const fetchProducts = () => {
  return (dispatch) => {
    if (APICallCount < 3) {
      APICallCount += 1;
      FNPRepository.fetchProducts()
        .then((res) => {
          dispatch({
            type: 'FETCH_PRODUCTS_FULFILLED',
            payload: res.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: 'FETCH_PRODUCTS_FAILED',
            payload: err,
          });
        });
    } else {
      dispatch({
        type: 'FETCH_PRODUCTS_FULFILLED',
        payload: [],
      });
    }
  };
};
