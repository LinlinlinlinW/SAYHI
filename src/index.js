import React from "react";
import ReactDOM from "react-dom";
import "./Client/index.css";
import App from "./Client/components/App";
import { Provider } from "react-redux";
import store from "./Client/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
