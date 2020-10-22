import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import messagesReducer from "./messages"
import errorsReducer from "./errors";
import historyReducer from "./history"

const rootReducer = combineReducers({
  user: userReducer,
  errorMsg: errorsReducer,
  messages: messagesReducer,
  historyMsg: historyReducer,
});

export default rootReducer;
