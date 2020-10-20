import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import messagesReducer from "./messages"
import errorsReducer from "./errors";
import draftsReducer from "./drafts"
import channelsReducer from "./channels";


const rootReducer = combineReducers({
  user: userReducer,
  errorMsg: errorsReducer,
  messages: messagesReducer,
  drafts: draftsReducer,
  channels: channelsReducer,
});

export default rootReducer;
