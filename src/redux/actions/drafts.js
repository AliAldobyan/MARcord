import { SET_DRAFT } from "./actionTypes";

export const setNewDraft = (message, channel) => {
    const channelToString = `channel${channel}`
    const draft = [channelToString, message.message]
    console.log(draft, channelToString)
    return {
        type: SET_DRAFT,
        payload: draft,
    };
};
