import {
  CHANGE_SEARCH_CATALOG,
  CLEAN_ITEMS,
  ITEMS_LOADING,
  ITEMS_ERROR,
  ITEMS_OK,
} from "./types";

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

export const getItems = (offset) => (dispatch, _getState) => {
  dispatch(itemsLoading(true));

  const paramsObj = qs.parse(window.location.search.slice(1));
  const params = qs.stringify({
    categoryId: paramsObj.category,
    q: paramsObj.search,
    offset: offset,
  });

  fetch(`${process.env.REACT_APP_BACKEND_URL}/items?${params}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(itemsOk(data));
    })
    .catch((error) => {
      dispatch(itemsError(error.message));
    });
};
