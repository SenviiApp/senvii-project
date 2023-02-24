import { $axios } from "../lib";

export const sendEmailVerification = async (email) => {
  try {
    const { data } = await $axios.post("/auth/forgot-password", email);
    return {
      responseStatus: data.success,
      message: data.msg,
    };
  } catch (error) {
    console.error(error.toString());
  }
};
