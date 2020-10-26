import { FETCH_CHANNELS, CREATE_CHANNEL } from "./actionTypes";
import instance from "./instance";

export const fetchChannels = () => async (dispatch) => {
  try {
    const res = await instance.get("/channels/");
    const channels = res.data;
    dispatch({
      type: FETCH_CHANNELS,
      payload: channels,
    });
  } catch (error) {
    console.error(error);
  }
};

export const createChannel = (channel_name) => async (dispatch) => {
  try {
    const res = await instance.post("/channels/create/", channel_name);
    const newChannel = res.data;

    dispatch({
      type: CREATE_CHANNEL,
      payload: newChannel,
    });
  } catch (error) {
    console.error(error.response.data);
  }
};
