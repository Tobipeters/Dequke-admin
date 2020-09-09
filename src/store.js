import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const enhancers = [];

//check if we are not on production: Enable Redux DevTool Extension
if (process.env.NODE_ENV !== "production") {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const enhancedComposer = compose(applyMiddleware(thunk), ...enhancers);

export const store = createStore(reducers, enhancedComposer);
