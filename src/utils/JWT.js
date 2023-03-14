const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();
const config = require('../../config.js')

const createLoginToken = (user) => {
  // take data
  const { id } = user;

  // create token
  const accessToken = sign({ id }, process.env.JWT_SECRET);

  return accessToken;
};

const validateLoginToken = (req, res, next) => {
  // take token
  const accessToken = req.cookies["Access-token"];

  // verify token
  if (!accessToken)
    return res.status(200).json({ success: false, msg: "token_notfound" });

  try {
    const validToken = verify(accessToken, process.env.JWT_SECRET);
    if (validToken) return next();
  } catch (error) {
    return res.status(200).json({ success: false, msg: "token_notfound" });
  }
};

const createEmailToken = (email, code) => {
  // create token
  const token = sign(
    {
      email,
      code,
    },
    process.env.JWT_SECRET,
    { expiresIn: "10m" }
  );

  return token;
};

const verifyEmailToken = (token) => {
  const data = verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return null;
    return decoded;
  });

  return data;
};

const createForgotPasswordToken = (user) => {
  // take data
  const { id, email } = user;

  // create token
  const token = sign({ email, id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  // crete link for email
  const link =
    config.NODE_ENV === "dev"
      ? `http://localhost:/api/auth/reset-password/${id}/${token}`
      : `https://www.senvii.com/api/auth/reset-password/${id}/${token}`;

  return link;
};

const verifyResetPasswordToken = (token) => {
  // verify token
  const data = verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return null;
    return decoded;
  });

  return data;
};

module.exports = {
  createLoginToken,
  createEmailToken,
  createForgotPasswordToken,
  validateLoginToken,
  verifyEmailToken,
  verifyResetPasswordToken,
};
