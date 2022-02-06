import {
  CHANGE_SEARCH_CATALOG,
  CLEAN_ITEMS,
  ITEMS_LOADING,
  ITEMS_ERROR,
  ITEMS_OK,
} from "./types";

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

export const getItems = (category, offset, search) => (dispatch, _getState) => {
  dispatch(itemsLoading(true));

  const qs = require("qs");
  const params = qs.stringify({
    categoryId: category,
    offset: offset,
    q: search,
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
