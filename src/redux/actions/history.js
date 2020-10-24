import { SET_HISTORY } from "./actionTypes";

export const setHistory = (channel, messages) => {
    const channelToString = `channel${channel}`
    const historyMessages = [channelToString, messages]
    localStorage.setItem(channelToString, messages)
    console.log(historyMessages, channelToString, localStorage.getItem(channelToString))
    return {
        type: SET_HISTORY,
        payload: historyMessages,
    };
};
