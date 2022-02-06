import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import headerReducer from "./header/reducer";
import salesReducer from "./sales/reducer";
import itemsReducer from "./items/reducer";
import categoriesReducer from "./categories/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  headerReducer,
  salesReducer,
  itemsReducer,
  categoriesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
