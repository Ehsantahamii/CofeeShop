import axios from "axios";
import { toast } from "react-toastify";


const fetchProductsRequest = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchProductsSuccess = (products) => {
  return {
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
  };
};

const fetchProductsFailure = (error) => {
  toast.error("داده ای یافت نشد !")
  return {
    type: "FETCH_PRODUCTS_FAILURE",
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("https://aminsheibani.ir/products")
      .then((response) => {
        const products = response.data.data;
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchProductsFailure(errorMsg));
      });
  };
};
