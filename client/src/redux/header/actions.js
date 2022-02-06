import { CHANGE_SEARCH_HEADER, CLEAN_SEARCH_HEADER } from "./types";

export const changeSearchHeader = (field, value) => ({
  type: CHANGE_SEARCH_HEADER,
  payload: { field, value },
});

export const cleanSearchHeader = () => ({
  type: CLEAN_SEARCH_HEADER,
  payload: {},
});
