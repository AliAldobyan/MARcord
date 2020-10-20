import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorsReducer from "./errors";

const rootReducer = combineReducers({
  user: userReducer,
  errorMsg: errorsReducer,
});

export default rootReducer;
