import {
  CATEGORIES_LOADING,
  CATEGORIES_ERROR,
  CATEGORIES_OK,
  CHANGE_CATEGORY,
} from "./types";

import { fetchCategories } from "../../utils/api";

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

export const getCategories = () => async (dispatch, _getState) => {
  dispatch(categoriesLoading(true));
  try {
    const data = await fetchCategories();
    data.unshift({ id: 0, title: "Все" });
    dispatch(categoriesOk(data));
  } catch (error) {
    dispatch(categoriesError(error.message));
  }
};
