import {
  ITEMS_LOADING,
  ITEMS_ERROR,
  ITEMS_OK,
  CHANGE_CATEGORY,
  CHANGE_SEARCH_CATALOG,
  CLEAN_ITEMS,
} from "./actionTypes";

const initialState = {
  items: [],
  loading: true,
  error: null,
  activeCategory: 0,
  offset: 0,
  search: "",
  loadMore: true,
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_LOADING:
      const { loading } = action.payload;
      state.loading = loading;
      return { ...state };
    case ITEMS_ERROR:
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
      return { ...state };
    case ITEMS_OK:
      const { items } = action.payload;
      state.items = [...state.items, ...items];
      state.offset = state.items.length;
      state.loading = false;
      if (items.length < 6) {
        state.loadMore = false;
      } else {
        state.loadMore = true;
      }
      return { ...state };
    case CHANGE_CATEGORY:
      const { id } = action.payload;
      state.items = initialState.items;
      state.activeCategory = id || initialState.activeCategory;
      state.offset = initialState.offset;
      return { ...state };
    case CHANGE_SEARCH_CATALOG:
      const { search } = action.payload;
      state.search = search;
      return { ...state };
    case CLEAN_ITEMS:
      state.items = initialState.items;
      return { ...state };
    default:
      return state;
  }
}
