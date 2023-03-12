import { number, object, string, ValidationError } from "yup";

let registerSchema = object({
  userName: string(),
  entityName: string(),
  phoneNumber: string(),
  image: string().nullable(),
});

export const validateEditProfile = async (data) => {
  let parsedUser;
  try {
    parsedUser = await registerSchema.validate(data);
    return parsedUser;
  } catch (error) {
    console.error(error.message);
  }
};
