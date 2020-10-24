import {SEND_MESSAGE, SET_MESSAGES, SET_LOCAL_MESSAGES, FIRST_FETCH} from "../actions/actionTypes";

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
        case SET_LOCAL_MESSAGES:
            // const action.payload["channel"] = action.payload["channel"]
            // if (!state[action.payload["channel"]]){
            //     const action.payload["messages"] = action.payload["messages"]
                const lastTime = action.payload["messages"][action.payload["messages"].length -1].timestamp
                state[action.payload["channel"]] = {
                    messages: action.payload["messages"],
                    timeStamp: lastTime,
                    loading: false,
                    firstTime: false
                }
                break;


        case FIRST_FETCH:
            console.log("FIRST_FETCH",action.payload)
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
            console.log(state.messages)
            console.log(action.payload)
            const channelName = action.payload["channel"]
            if (state[action.payload["channel"]].messages.length === action.payload["messages"].length || action.payload["messages"].length === 0){
                state[channelName] = {
                    ...state[channelName],
                    loading: false,
                    firstTime: false
                }
                return {
                    ...state,
                    loading: false
                }
            }
            else{
                let lastTimestamp = action.payload["messages"][action.payload["messages"].length -1].timestamp
                console.log(lastTimestamp)
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
