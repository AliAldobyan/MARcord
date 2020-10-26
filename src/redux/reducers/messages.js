import {SEND_MESSAGE, SET_MESSAGES, FIRST_FETCH} from "../actions/actionTypes";

const initialState = {
    loading: true,
    timeStamp: "",
    channel:{
        messages: [],
        timeStamp: "",
        loading: true,
        firstTime: true
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FIRST_FETCH:
            if (action.payload["messages"].length === 0){
                state[action.payload["channel"]] = {
                    messages: action.payload["messages"],
                    timeStamp: "",
                    loading: false,
                    firstTime: false
                }
                return {
                    ...state,
                    timeStamp: "",
                    loading: false
                }
            }
            else {
                let lastTimestamp = action.payload["messages"][action.payload["messages"].length -1].timestamp
                state[action.payload["channel"]] = {
                    messages: action.payload["messages"],
                    timeStamp: lastTimestamp,
                    loading: false,
                    firstTime: false
                }
                return {
                    ...state,
                    timeStamp: lastTimestamp,
                    loading: false
                }
            }

        case SET_MESSAGES:
            const channelName = action.payload["channel"]
            if (state[action.payload["channel"]].messages.length === action.payload["messages"].length || action.payload["messages"].length === 0){
                const time = state[channelName].messages[state[channelName].messages.length -1].timestamp
                state[channelName] = {
                    ...state[channelName],
                    loading: false,
                    firstTime: false
                }
                return {
                    ...state,
                    timeStamp: time,
                    loading: false
                }
            }
            else{
                let lastTimestamp = action.payload["messages"][action.payload["messages"].length -1].timestamp
                let latest = [...state[action.payload["channel"]].messages, ...action.payload["messages"]]
                state[channelName] = {
                    messages: latest,
                    timeStamp: lastTimestamp,
                    loading: false,
                    firstTime: false
                }
                return {
                    ...state,
                    timeStamp: lastTimestamp,
                    loading: false
                }
            }

        case SEND_MESSAGE:
            const newMessage = action.payload["messages"];
            state[action.payload["channel"]] = {
                messages: [...state[action.payload["channel"]].messages, newMessage],
                timeStamp: newMessage.timestamp,
                loading: false,
                firstTime: false
            }
            return {
                ...state,
                timeStamp: newMessage.timestamp,
                loading: false
            }

        default:
            return state;
    }
};

export default reducer;
