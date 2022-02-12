import { CHANGE_ORDER, CLEAN_ORDER } from "./types";

const initialState = {
  phone: "",
  address: "",
  agreement: false,
};

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ORDER:
      const { field, value } = action.payload;
      return { ...state, [field]: value };
    case CLEAN_ORDER:
      return { ...initialState };
    default:
      return state;
  }
}
