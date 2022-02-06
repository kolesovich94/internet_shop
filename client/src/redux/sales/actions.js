import { SALES_LOADING, SALES_ERROR, SALES_OK } from "./types";

const salesLoading = (loading) => ({
  type: SALES_LOADING,
  payload: { loading },
});

const salesError = (error) => ({
  type: SALES_ERROR,
  payload: { error },
});

const salesOk = (sales) => ({ type: SALES_OK, payload: { sales } });

export const getSales = () => (dispatch, _getState) => {
  dispatch(salesLoading(true));
  fetch(`${process.env.REACT_APP_BACKEND_URL}/top-sales`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(salesOk(data));
    })
    .catch((error) => {
      dispatch(salesError(error.message));
    });
};
