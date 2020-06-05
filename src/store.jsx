import { connectRouter, routerMiddleware } from "connected-react-router";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import history from "./history";
import FNPReducer from "./Reducers/FNPReducer";

const combinedReducer = combineReducers({
  fnp: FNPReducer,
  router: connectRouter(history),
});

let composeEnhancers = compose;
let middlewares = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === "development") {
  middlewares = [...middlewares, logger];
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  combinedReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
