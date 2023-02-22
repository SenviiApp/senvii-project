const {
  login,
  register,
  confirm,
  profile,
  forgotPasswordAuth,
  resetPasswordAuth,
  resetPasswordPost,
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

const resetPassPost = resetPasswordPost;

module.exports = {
  postLogin,
  postRegister,
  getProfile,
  confirmAccount,
  forgotPassword,
  resetPassword,
  resetPassPost,
};
