import { CHANGE_ORDER, CLEAN_ORDER } from "./types";

export const changeOrder = (field, value) => ({
  type: CHANGE_ORDER,
  payload: { field, value },
});

export const cleanOrder = () => ({
  type: CLEAN_ORDER,
  payload: {},
});
