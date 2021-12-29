import {applyMiddleware, createStore } from "redux";
import reducer from "./Reducer";

const middleware1 = (store) => (next) => (action) => {
    if (typeof action === "function") {
      const func = action;
      return func(store.dispatch, store.getState);
    } else {
      return next(action);
    }
  };


  export const Store= createStore(reducer
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    console.log(Store.getState())