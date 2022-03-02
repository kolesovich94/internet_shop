import { SALES_LOADING, SALES_ERROR, SALES_OK } from "./types";
import { fetchTopSales } from "../../utils/api";

const salesLoading = (loading) => ({
  type: SALES_LOADING,
  payload: { loading },
});

const salesError = (error) => ({
  type: SALES_ERROR,
  payload: { error },
});

const salesOk = (sales) => ({ type: SALES_OK, payload: { sales } });

export const getSales = () => async (dispatch, _getState) => {
  dispatch(salesLoading(true));
  try {
    const data = await fetchTopSales();
    dispatch(salesOk(data));
  } catch (error) {
    dispatch(salesError(error.message));
  }
};
