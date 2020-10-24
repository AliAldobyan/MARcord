import instance from "./instance";
import bot from "./bot";
import { SET_LOCAL_MESSAGES, SET_MESSAGES, SEND_MESSAGE, FIRST_FETCH } from "./actionTypes";

export const fetchMessages = (id, timestamp) => async (dispatch) => {
  try {
    const res = await instance.get(`/channels/${id}/?latest=${timestamp}`);
    const messages = res.data;
    console.log("actions", messages);
    dispatch({
      type: SET_MESSAGES,
      payload: {channel:`channel${id}`, messages: messages},
    });
  } catch (error) {
    console.error(error);
  }
};

export const firstFetch = (id) => async (dispatch) => {
  try {
    const res = await instance.get(`/channels/${id}/`);
    const messages = res.data;
    console.log("first actions", messages);
    dispatch({
      type: FIRST_FETCH,
      payload: {channel:`channel${id}`, messages: messages},
    });
  } catch (error) {
    console.error(error);
  }
};

export const localMessages = (id, messages=[]) => (dispatch) => {
  try {
    const messages = messages
    console.log("local messages actions", messages);
    dispatch({
      type: SET_LOCAL_MESSAGES,
      payload: {channel:`channel${id}`, messages: messages},
    });
  } catch (error) {
    console.error(error);
  }
};

export const postMessage = (message, channel) => async (dispatch) => {
  try {
    const res = await instance.post(`/channels/${channel}/send/`, message);
    const newMessage = res.data;

    dispatch({
      type: SEND_MESSAGE,
      payload: {channel:`channel${channel}`, messages: newMessage},
    });
  } catch (error) {
    console.error(error.response.data);
  }
};


export const botMessage = (message, channel) => async (dispatch) => {
  try {
    const res = await bot.post(`/channels/${channel}/send/`, message);
    const newMessage = res.data;
    dispatch({
      type: SEND_MESSAGE,
      payload: {channel:`channel${channel}`, messages: newMessage},
    });
  } catch (error) {
    console.error(error.response.data);
  }
};
