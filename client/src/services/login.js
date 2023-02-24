import { $axios } from "../lib";

export const login = async (form) => {
  //verificaciones extra
  try {
    // const { data } = await $axios.post("/auth/login", form);
    const response = await $axios.get("/");
    return response;
  } catch (error) {
    return error.message;
  }
};
