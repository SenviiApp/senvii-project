import { $axios } from "../lib/axiosClient";

export const register = async (form) => {
  const { data } = await $axios.post("/auth/register", form);
  return data;
};
