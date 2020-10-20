import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import messagesReducer from "./messages"

const rootReducer = combineReducers({
  user: userReducer,
  messages: messagesReducer,
});

export default rootReducer;
