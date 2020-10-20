import instance from "./instance";
import { SET_MESSAGES, SEND_MESSAGE } from "./actionTypes";

export const fetchMessages = (id, timestamp) => async dispatch => {
    try {
        const res = await instance.get(`/channels/${id}/?latest=${timestamp}`);
        const messages = res.data;
        console.log("actions",messages)
        dispatch({
            type: SET_MESSAGES,
            payload: messages
        });
    } catch (error) {
        console.error(error);
    }
};

export const postMessage = (message, channel) => async dispatch => {
    try {
        const res = await instance.post(`/channels/${channel}/send/`, message);
        const newMessage = res.data;

        dispatch({
            type: SEND_MESSAGE,
            payload: newMessage
        });
    } catch (error) {
        console.error(error.response.data);
    }
};
