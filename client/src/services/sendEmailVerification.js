import { $axios } from "../lib";

export const sendEmailVerification = async (email) => {
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!EMAIL_REGEX.test(email))
    return {
      responseStatus: false,
      message: "Introduzca un email válido",
    };
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
