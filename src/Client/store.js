import rootReducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// step1: add "redux-thunk" here

const store = configureStore({
    reducer: {rootReducer}, 
    middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk })
} );

export default store;
