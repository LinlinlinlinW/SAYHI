import rootReducer from "./reducers";
import { configureStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// step1: add "redux-thunk" here

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
