import {SEND_MESSAGE, SET_MESSAGES} from "../actions/actionTypes";

const initialState = {
    messages: [],
    timeStamp: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            console.log(state.messages)
            console.log(action.payload)
            if (state.messages.length === action.payload.length || action.payload.length === 0)
                return state;
            else{
                let lastTimestamp = action.payload[action.payload.length -1].timestamp
                console.log(lastTimestamp)
                return {
                    ...state,
                    messages: [...state.messages, ...action.payload],
                    timeStamp: lastTimestamp,
                }
            }

        case SEND_MESSAGE:
            const newMessage = action.payload;
            return {
                ...state,
                messages: [...state.messages, newMessage],
                timeStamp: newMessage.timestamp
            }

        default:
            return state;
    }
};

export default reducer;
