import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ORDER_OK,
  ORDER_ERROR,
  ORDER_LOADING,
  CLEAN_ORDERED,
} from "./types";

export const getCartItems = () => ({
  type: GET_CART_ITEMS,
  payload: {},
});

export const addToCart = (item, size, kolvo) => ({
  type: ADD_TO_CART,
  payload: { item, size, kolvo },
});

export const removeFromCart = (id, size) => ({
  type: REMOVE_FROM_CART,
  payload: { id, size },
});

export const cleanOrdered = () => ({
  type: CLEAN_ORDERED,
  payload: {},
});

const orderLoading = (loading) => ({
  type: ORDER_LOADING,
  payload: { loading },
});

const orderError = (error) => ({
  type: ORDER_ERROR,
  payload: { error },
});

const orderOk = () => ({ type: ORDER_OK, payload: {} });

export const postOrder = (order) => (dispatch, _getState) => {
  dispatch(orderLoading(true));
  fetch(`${process.env.REACT_APP_BACKEND_URL}/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      dispatch(orderOk());
    })
    .catch((error) => {
      dispatch(orderError(error.message));
    });
};
