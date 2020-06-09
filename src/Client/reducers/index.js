import { combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers"


const myLogger = (store) => (next) => (action) => {
    console.group()
    console.log("Logged Action: ", action);
    next(action);
}

export default combineReducers({ reducers },{}, applyMiddleware());