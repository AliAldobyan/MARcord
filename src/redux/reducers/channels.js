import { FETCH_CHANNELS, CREATE_CHANNEL } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHANNELS:
      const channels = action.payload;
      return channels;

    case CREATE_CHANNEL:
      const newChannel = action.payload;
      return [...state, newChannel];

    default:
      return state;
  }
};

export default reducer;
