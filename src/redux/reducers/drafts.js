import { SET_DRAFT } from "../actions/actionTypes";

const initialState = {
    drafts: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRAFT:
            return {
                ...state,
                drafts: state.drafts[action.payload[0]] = action.payload[1]
            }
        default:
            return state;
    }
};

export default reducer;
