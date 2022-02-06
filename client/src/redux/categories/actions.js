import {
  CATEGORIES_LOADING,
  CATEGORIES_ERROR,
  CATEGORIES_OK,
  CHANGE_CATEGORY,
} from "./types";

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

export const changeCategory = (id) => ({
  type: CHANGE_CATEGORY,
  payload: { id },
});

export const getCategories = () => (dispatch, _getState) => {
  dispatch(categoriesLoading(true));
  fetch(`${process.env.REACT_APP_BACKEND_URL}/categories`)
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
