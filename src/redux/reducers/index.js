import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
