import {
  ITEM_ID_LOADING,
  ITEM_ID_ERROR,
  ITEM_ID_OK,
  CHANGE_ITEM_ID,
  CLEAN_ITEM_ID,
} from "./types";

const initialState = {
  item: {},
  loading: true,
  error: null,
  kolvo: 1,
  size: null,
};

export default function itemIdReducer(state = initialState, action) {
  switch (action.type) {
    case ITEM_ID_LOADING:
      const { loading } = action.payload;
      return { ...state, loading: loading };
    case ITEM_ID_ERROR:
      const { error } = action.payload;
      return { ...state, error: error, loading: false };
    case ITEM_ID_OK:
      const { item } = action.payload;
      return { ...state, item: item, loading: false };
    case CHANGE_ITEM_ID:
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    case CLEAN_ITEM_ID:
      return { ...state, kolvo: initialState.kolvo, size: initialState.size };
    default:
      return state;
  }
}
