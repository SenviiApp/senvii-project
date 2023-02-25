import { $axios } from "../lib/axiosClient";

export const register = async (form) => {
  try {
    const { data } = await $axios.post("/auth/register", form);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
