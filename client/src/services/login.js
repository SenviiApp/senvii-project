import { $axios } from "../lib";

export const login = async (form) => {
  //verificaciones extra
  try {
    const { data } = await $axios.post("/auth/login", form);
    return data;
  } catch (error) {
    return error.response.data;
  }
};
