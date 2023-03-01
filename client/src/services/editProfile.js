import { $axios } from "../lib/axiosClient";

export const editProfile = async (form, id) => {
  try {
    const { data } = await $axios.post(`/user/edit-profile/${id}`, form);
    return data;
  } catch (error) {
    return error.response.data;
  }
};