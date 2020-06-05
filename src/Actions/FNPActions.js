import * as FNPRepository from "../Repository/FNPRepository";

export const fetchProducts = () => {
  return (dispatch) => {
    FNPRepository.fetchProducts()
      .then((res) => {
        dispatch({
          type: "FETCH_PRODUCTS_FULFILLED",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_PRODUCTS_FAILED",
          payload: err,
        });
      });
  };
};
