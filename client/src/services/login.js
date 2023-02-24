import { $axios } from "../lib";

export const login = async (form) => {
  //verificaciones extra
  try {
    const { data } = await $axios.post(
      "http://localhost:3001/api/auth/login",
      form,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    //const response = await $axios.get("/");
    return data;
  } catch (error) {
    return error.message;
  }
};
