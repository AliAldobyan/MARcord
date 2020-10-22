import { SET_HISTORY } from "../actions/actionTypes";

const initialState = {
    historyMessages: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HISTORY:
            return {
                ...state,
                historyMessages: state.historyMessages[action.payload[0]] = action.payload[1]
            }
        default:
            return state;
    }
};

export default reducer;
