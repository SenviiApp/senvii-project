const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

const createLoginToken = (user) => {
  const { id, userName } = user;
  const accessToken = sign({ userName, id }, process.env.JWT_SECRET);

  return accessToken;
};

const validateLoginToken = (req, res, next) => {
  const accessToken = req.cookies["Access-token"];

  if (!accessToken)
    return res
      .status(400)
      .json({ success: false, msg: "user_notauthenticated" });

  try {
    const validToken = verify(accessToken, process.env.JWT_SECRET);
    if (validToken) return next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const createEmailToken = (email, code) => {
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
  const { id, email } = user;

  const token = sign({ email, id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const link = `http://localhost:3001/api/auth/reset-password/${id}/${token}`;

  return link;
};

const verifyResetPasswordToken = (token) => {
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
