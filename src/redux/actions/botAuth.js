import bot from "./bot";
import decode from "jwt-decode";
import Cookies from "js-cookie";

export const botLogin = () => {
  const botuser = { username: "MARcord", password: "123" };
  return async (dispatch) => {
    try {
      const res = await bot.post("/login/", botuser);
      const { token } = res.data;

      dispatch(setBot(token));
    } catch (err) {
      console.error(err);
    }
  };
};

const setBot = (token) => {
  setBotToken(token);
  if (token) decode(token)
  else return null;
};

const setBotToken = (token) => {
  if (token) {
    Cookies.set("Bottoken", token);
    bot.defaults.headers.Authorization = `jwt ${token}`;
  }
};
