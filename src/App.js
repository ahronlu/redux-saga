import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./Header";
import Home from "./Home";

export default () => (
  <Provider store={store}>
    <Header />
    <Home />
  </Provider>
);
