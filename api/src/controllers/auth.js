const {
  login,
  register,
  confirm,
  profile,
  forgotPasswordAuth,
  resetPasswordAuth,
} = require("../utils/auth");

// LOGIN
const postLogin = login;

// REGISTER
const postRegister = register;

// CONFIRM ACCOUNT
const confirmAccount = confirm;

const getProfile = profile;

const forgotPassword = forgotPasswordAuth;

const resetPassword = resetPasswordAuth;

module.exports = {
  postLogin,
  postRegister,
  getProfile,
  confirmAccount,
  forgotPassword,
  resetPassword,
};
