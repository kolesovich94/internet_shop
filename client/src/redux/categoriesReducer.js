import {
  CATEGORIES_LOADING,
  CATEGORIES_ERROR,
  CATEGORIES_OK,
} from "./actionTypes";

const initialState = {
  categories: [],
  loading: true,
  error: null,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_LOADING:
      const { loading } = action.payload;
      state.loading = loading;
      return { ...state };
    case CATEGORIES_ERROR:
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
      return { ...state };
    case CATEGORIES_OK:
      const { categories } = action.payload;
      state.categories = categories;
      state.loading = false;
      return { ...state };
    default:
      return state;
  }
}
