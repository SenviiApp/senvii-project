import { $axios } from "../lib";

export const endSession = async () => {
  try {
    await $axios.post("/auth/logout");
  } catch (error) {
    console.log(error);
  }
};
