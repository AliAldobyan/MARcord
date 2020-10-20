import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import messagesReducer from "./messages"
import errorsReducer from "./errors";

const rootReducer = combineReducers({
  user: userReducer,
  errorMsg: errorsReducer,
  messages: messagesReducer,
});

export default rootReducer;
