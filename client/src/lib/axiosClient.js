import axios from "axios";

const url = "http://localhost:3001/api";

export const $axios = axios.create({
  baseURL: url,
  withCredentials: true,
});
