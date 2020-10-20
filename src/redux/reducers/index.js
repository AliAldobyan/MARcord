import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import channelsReducer from "./channels";

const rootReducer = combineReducers({
  user: userReducer,
  channels: channelsReducer,
});

export default rootReducer;
