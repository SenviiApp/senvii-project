import { $axios } from "../lib";

export const login = async (form) => {
  //verificaciones extra
  try {
    const { data } = await $axios.post("/auth/login", form, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    return error.message;
  }
};
