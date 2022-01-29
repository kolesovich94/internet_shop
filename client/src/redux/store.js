import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import headerReducer from "./headerReducer";
import salesReducer from "./salesReducer";
import itemsReducer from "./itemsReducer";
import categoriesReducer from "./categoriesReducer";
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
