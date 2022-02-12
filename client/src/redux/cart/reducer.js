import {
  ADD_TO_CART,
  GET_CART_ITEMS,
  REMOVE_FROM_CART,
  ORDER_OK,
  ORDER_ERROR,
  ORDER_LOADING,
  CLEAN_ORDERED,
} from "./types";

const initialState = {
  cartItems: [],
  fullItog: 0,
  loading: false,
  error: null,
  ordered: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_ITEMS:
      const items = JSON.parse(window.localStorage.getItem("items")) || [];
      const fullItog = items.reduce((prev, current) => prev + current.itog, 0);
      return { ...state, cartItems: items, fullItog: fullItog };
    case ADD_TO_CART:
      const { item, size, kolvo } = action.payload;
      let fl = false;
      let aitems = state.cartItems.map((e) => {
        if (e.size === size && e.id === item.id) {
          e.count += kolvo;
          e.itog = e.count * e.price;
          fl = true;
        }
        return e;
      });
      if (!fl) {
        aitems.push({
          id: item.id,
          size: size,
          count: kolvo,
          title: item.title,
          price: item.price,
          itog: item.price * kolvo,
        });
      }
      const aitog = aitems.reduce((prev, current) => prev + current.itog, 0);
      window.localStorage.setItem("items", JSON.stringify(aitems));
      return { ...state, cartItems: aitems, fullItog: aitog };
    case REMOVE_FROM_CART:
      const { id, size: rsize } = action.payload;
      const ritems = state.cartItems.filter(
        (e) => e.id !== id || e.size !== rsize
      );
      const ritog = ritems.reduce((prev, current) => prev + current.itog, 0);
      window.localStorage.setItem("items", JSON.stringify(ritems));
      return { ...state, cartItems: ritems, fullItog: ritog };
    case ORDER_LOADING:
      const { loading } = action.payload;
      return { ...state, loading: loading };
    case ORDER_ERROR:
      const { error } = action.payload;
      return { ...state, error: error, loading: false };
    case ORDER_OK:
      window.localStorage.clear();
      return {
        ...state,
        loading: false,
        ordered: true,
        cartItems: initialState.cartItems,
        fullItog: initialState.fullItog,
      };
    case CLEAN_ORDERED:
      return { ...state, ordered: initialState.ordered };
    default:
      return state;
  }
}
