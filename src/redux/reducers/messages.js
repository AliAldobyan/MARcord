import {SEND_MESSAGE, SET_MESSAGES, SET_LOCAL_MESSAGES} from "../actions/actionTypes";

const initialState = {
    messages: [],
    timeStamp: "",
    loading: true,
    firstTime: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCAL_MESSAGES:
            console.log("SET_LOCAL_MESSAGES",action.payload)
            let lastTimestamp = action.payload[action.payload.length -1].timestamp
            return {
                ...state,
                messages: action.payload,
                timeStamp: lastTimestamp,
                loading: false,
                firstTime: false
            }
        case SET_MESSAGES:
            console.log(state.messages)
            console.log(action.payload)
            if (state.messages.length === action.payload.length || action.payload.length === 0)
                return {
                    ...state,
                    loading: false,
                    firstTime: false
                }
            else{
                let lastTimestamp = action.payload[action.payload.length -1].timestamp
                console.log(lastTimestamp)
                let latest = [...state.messages, ...action.payload]
                return {
                    ...state,
                    messages: latest,
                    timeStamp: lastTimestamp,
                    loading: false,
                    firstTime: false
                }
            }

        case SEND_MESSAGE:
            const newMessage = action.payload;
            return {
                ...state,
                messages: [...state.messages, newMessage],
                timeStamp: newMessage.timestamp,
                loading: false,
                firstTime: false
            }

        default:
            return state;
    }
};

export default reducer;
