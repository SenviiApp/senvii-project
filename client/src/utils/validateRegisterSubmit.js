import { number, object, string, ValidationError } from "yup";

let registerSchema = object({
  userName: string().required(),
  identificationNumber: number().required(),
  country: string().required(),
  entityType: string().required(),
  entityName: string().required(),
  phoneNumber: number().required(),
  email: string().required().email(),
  password: string().required(),
  _confirmed_password: string().required(),
  image: string().nullable(),
});

export const validateRegisterSubmit = async (data) => {
  let parsedUser;
  try {
    parsedUser = await registerSchema.validate(data);
    if (parsedUser.password !== parsedUser._confirmed_password) {
      throw new ValidationError("Passwords doesn't match");
    }
    return parsedUser;
  } catch (error) {
    console.error(error.message);
  }
};
