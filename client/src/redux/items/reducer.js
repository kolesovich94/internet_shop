import {
  ITEMS_LOADING,
  ITEMS_ERROR,
  ITEMS_OK,
  CHANGE_SEARCH_CATALOG,
  CLEAN_ITEMS,
} from "./types";

import { CHANGE_CATEGORY } from "../categories/types";

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
      return { ...state, loading: loading };
    case ITEMS_ERROR:
      const { error } = action.payload;
      return { ...state, error: error, loading: false };
    case ITEMS_OK:
      const { items } = action.payload;
      const modifiedItems = [...state.items, ...items];
      return {
        ...state,
        items: modifiedItems,
        offset: modifiedItems.length,
        loading: false,
        loadMore: items.length < 6 ? false : true,
      };
    case CHANGE_CATEGORY:
      const { id } = action.payload;
      return {
        ...state,
        items: initialState.items,
        activeCategory: id || initialState.activeCategory,
        offset: initialState.offset,
      };
    case CHANGE_SEARCH_CATALOG:
      const { search } = action.payload;
      return { ...state, search: search };
    case CLEAN_ITEMS:
      return { ...state, items: initialState.items };
    default:
      return state;
  }
}
