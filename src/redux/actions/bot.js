import axios from "axios";

const bot = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/",
});

export default bot;
