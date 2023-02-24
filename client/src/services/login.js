import { $axios } from "../lib";

export const login = async (form) => {
  try {
    const { data } = await $axios.post("/auth/login", form);
    return data;
  } catch (error) {
    return error.message;
  }
};
