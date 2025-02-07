import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

import { checkForExpiredToken, fetchChannels, botLogin } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForExpiredToken());
store.dispatch(fetchChannels());
store.dispatch(botLogin());

export default store;
