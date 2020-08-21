import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./redux/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

//creating store(always only one in redux)

/*
(alias) createStore<unknown, Action<any>, unknown, unknown>(
  reducer: Reducer<unknown, Action<any>>, enhancer?: StoreEnhancer<unknown, unknown> | undefined
  ): Store<unknown, Action<any>> (+1 overload)
*/
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
