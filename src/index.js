import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import NavBar from "./components/mainComponents/NavBar";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "./components/reducers";
import CarViewer from "./components/mainComponents/CarViewer";

const store = createStore(allReducers, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(store.getState())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CarViewer />
    </Provider>
  </React.StrictMode>
);


