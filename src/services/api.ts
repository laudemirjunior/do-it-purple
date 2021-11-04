import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-do-it.herokuapp.com/",
});
