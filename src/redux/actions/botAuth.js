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
  const bot = token ? decode(token) : null;
};

const setBotToken = (token) => {
  if (token) {
    Cookies.set("Bottoken", token);
    bot.defaults.headers.Authorization = `jwt ${token}`;
  }
};

// export const checkForExpiredBotToken = () => {
//   const token = Cookies.get("Bottoken");
//   if (token) {
//     const currentTimeInSeconds = Date.now() / 1000;
//     const bot = decode(token);
//     if (bot.exp >= currentTimeInSeconds) {
//       return setBot(token);
//     }
//   }
//   return botLogin();
// };
