import { SALES_LOADING, SALES_ERROR, SALES_OK } from "./actionTypes";

const initialState = {
  sales: [],
  loading: true,
  error: null,
};

export default function salesReducer(state = initialState, action) {
  switch (action.type) {
    case SALES_LOADING:
      const { loading } = action.payload;
      state.loading = loading;
      return { ...state };
    case SALES_ERROR:
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
      return { ...state };
    case SALES_OK:
      const { sales } = action.payload;
      state.sales = sales;
      state.loading = false;
      return { ...state };
    default:
      return state;
  }
}
