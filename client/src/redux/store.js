import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import headerReducer from "./header/reducer";
import salesReducer from "./sales/reducer";
import itemsReducer from "./items/reducer";
import itemIdReducer from "./itemId/reducer";
import categoriesReducer from "./categories/reducer";
import orderReducer from "./order/reducer";
import cartReducer from "./cart/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  headerReducer,
  salesReducer,
  itemsReducer,
  itemIdReducer,
  categoriesReducer,
  orderReducer,
  cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
