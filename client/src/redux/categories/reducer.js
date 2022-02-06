import { CATEGORIES_LOADING, CATEGORIES_ERROR, CATEGORIES_OK } from "./types";

const initialState = {
  categories: [],
  loading: true,
  error: null,
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_LOADING:
      const { loading } = action.payload;
      return { ...state, loading: loading };
    case CATEGORIES_ERROR:
      const { error } = action.payload;
      return { ...state, error: error, loading: false };
    case CATEGORIES_OK:
      const { categories } = action.payload;
      return { ...state, categories: categories, loading: false };
    default:
      return state;
  }
}
