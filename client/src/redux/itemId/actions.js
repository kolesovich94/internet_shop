import {
  ITEM_ID_LOADING,
  ITEM_ID_ERROR,
  ITEM_ID_OK,
  CHANGE_ITEM_ID,
  CLEAN_ITEM_ID,
} from "./types";

import { fetchItemId } from "../../utils/api";

const itemIdLoading = (loading) => ({
  type: ITEM_ID_LOADING,
  payload: { loading },
});

const itemIdError = (error) => ({
  type: ITEM_ID_ERROR,
  payload: { error },
});

const itemIdOk = (item) => ({ type: ITEM_ID_OK, payload: { item } });

export const changeItemId = (field, value) => ({
  type: CHANGE_ITEM_ID,
  payload: { field, value },
});

export const cleanItemId = () => ({
  type: CLEAN_ITEM_ID,
  payload: {},
});

export const getItemId = (id) => async (dispatch, _getState) => {
  dispatch(itemIdLoading(true));

  try {
    const data = await fetchItemId(id);
    dispatch(itemIdOk(data));
  } catch (error) {
    dispatch(itemIdError(error.message));
  }
};
