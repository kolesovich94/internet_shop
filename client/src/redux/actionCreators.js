import {
  CHANGE_SEARCH_HEADER,
  CHANGE_SEARCH_CATALOG,
  CLEAN_ITEMS,
  SALES_LOADING,
  SALES_ERROR,
  SALES_OK,
  ITEMS_LOADING,
  ITEMS_ERROR,
  ITEMS_OK,
  CATEGORIES_LOADING,
  CATEGORIES_ERROR,
  CATEGORIES_OK,
  CHANGE_CATEGORY,
} from "./actionTypes";

// HEADER
export const changeSearchHeader = (field, value) => ({
  type: CHANGE_SEARCH_HEADER,
  payload: { field, value },
});

// SALES
const salesLoading = (loading) => ({
  type: SALES_LOADING,
  payload: { loading },
});

const salesError = (error) => ({
  type: SALES_ERROR,
  payload: { error },
});

const salesOk = (sales) => ({ type: SALES_OK, payload: { sales } });

export const getSales = () => (dispatch, _getState) => {
  dispatch(salesLoading(true));
  fetch(process.env.REACT_APP_SALES_URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(salesOk(data));
    })
    .catch((error) => {
      dispatch(salesError(error.message));
    });
};

// CATEGORIES
const categoriesLoading = (loading) => ({
  type: CATEGORIES_LOADING,
  payload: { loading },
});

const categoriesError = (error) => ({
  type: CATEGORIES_ERROR,
  payload: { error },
});

const categoriesOk = (categories) => ({
  type: CATEGORIES_OK,
  payload: { categories },
});

export const getCategories = () => (dispatch, _getState) => {
  dispatch(categoriesLoading(true));
  fetch(process.env.REACT_APP_CATEGORIES_URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      data.unshift({ id: 0, title: "Все" });
      dispatch(categoriesOk(data));
      dispatch(changeCategory());
    })
    .catch((error) => {
      dispatch(categoriesError(error.message));
    });
};

// ITEMS
export const changeCategory = (id) => ({
  type: CHANGE_CATEGORY,
  payload: { id },
});

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

  let params = new URLSearchParams();
  if (category) {
    params.append("categoryId", category);
  }
  if (offset) {
    params.append("offset", offset);
  }
  if (search) {
    params.append("q", search);
  }

  fetch(`${process.env.REACT_APP_ITEMS_URL}?${params}`)
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
