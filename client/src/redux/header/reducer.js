import { CHANGE_SEARCH_HEADER } from "./types";

const initialState = {
  isVisible: false,
  searchText: "",
};

export default function headerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_HEADER:
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    default:
      return state;
  }
}
