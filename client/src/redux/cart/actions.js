import {
  GET_CART_ITEMS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ORDER_OK,
  ORDER_ERROR,
  ORDER_LOADING,
  CLEAN_ORDERED,
} from "./types";

import { fetchOrder } from "../../utils/api";

export const getCartItems = () => ({
  type: GET_CART_ITEMS,
  payload: {},
});

export const addToCart = (item, size, count) => ({
  type: ADD_TO_CART,
  payload: { item, size, count },
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

export const postOrder = (order) => async (dispatch, _getState) => {
  dispatch(orderLoading(true));
  try {
    await fetchOrder(order);
    dispatch(orderOk());
  } catch (error) {
    dispatch(orderError(error.message));
  }
};
