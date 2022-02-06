import { SALES_LOADING, SALES_ERROR, SALES_OK } from "./types";

const initialState = {
  sales: [],
  loading: true,
  error: null,
};

export default function salesReducer(state = initialState, action) {
  switch (action.type) {
    case SALES_LOADING:
      const { loading } = action.payload;
      return { ...state, loading: loading };
    case SALES_ERROR:
      const { error } = action.payload;
      return { ...state, error: error, loading: false };
    case SALES_OK:
      const { sales } = action.payload;
      return { ...state, sales: sales, loading: false };
    default:
      return state;
  }
}
