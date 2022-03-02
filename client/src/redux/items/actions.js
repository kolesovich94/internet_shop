import {
  CHANGE_SEARCH_CATALOG,
  CLEAN_ITEMS,
  ITEMS_LOADING,
  ITEMS_ERROR,
  ITEMS_OK,
} from "./types";

import { fetchItems } from "../../utils/api";

const qs = require("qs");

export const changeSearchCatalog = (search) => ({
  type: CHANGE_SEARCH_CATALOG,
  payload: { search },
});

export const cleanItems = () => ({
  type: CLEAN_ITEMS,
  payload: {},
});

const itemsLoading = (loading) => ({
  type: ITEMS_LOADING,
  payload: { loading },
});

const itemsError = (error) => ({
  type: ITEMS_ERROR,
  payload: { error },
});

const itemsOk = (items) => ({ type: ITEMS_OK, payload: { items } });

export const getItems = (offset) => async (dispatch, _getState) => {
  dispatch(itemsLoading(true));

  const paramsObj = qs.parse(window.location.search.slice(1));
  const params = qs.stringify({
    categoryId: paramsObj.category,
    q: paramsObj.search,
    offset: offset,
  });

  try {
    const data = await fetchItems(params);
    dispatch(itemsOk(data));
  } catch (error) {
    dispatch(itemsError(error.message));
  }
};
