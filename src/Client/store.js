import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// step1: add "redux-thunk" here

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
