import { CHANGE_SEARCH_HEADER } from "./types";

export const changeSearchHeader = (field, value) => ({
  type: CHANGE_SEARCH_HEADER,
  payload: { field, value },
});
