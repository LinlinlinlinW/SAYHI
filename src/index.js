import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducers from "./reducers";
// connect store to the app
import { Provider } from 'react-redux';

const myStore = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// // STORE -> holds all the states
// import {createStore} from 'redux';
//
//
// // ACTION -> describes what you wanna do, e.g. increment
// const increment = () => {
//     return {
//         type : "INCREMENT"
//     }
// }
//
// const decrement = () => {
//     return {
//         type : "DECREMENT"
//     }
// }
//
// // REDUCER -> how actions transform the state into next state.
// //            Reducer check which action you did
// //            and based on the action it's gonna modify the Store
//
// const counter = (state=0, action) => {
//     switch(action.type) {
//         case "INCREMENT": return state + 1;
//         case "DECREMENT": return state - 1;
//     }
// }
//
// let store = createStore(counter);
//
// // Display it in the console
// store.subscribe(()=>console.log(store.getState()));
//
// // DISPATCH -> the way where we can actually execute that action.
// //             e.g. Dispatch this action to the reducer
//
// store.dispatch(increment());


ReactDOM.render(
  <Provider store = {myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
