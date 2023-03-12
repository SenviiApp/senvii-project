const { User, Institution } = require("../db");
const bcrypt = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const cloudinary = require("../utils/cloudinary");
const {
  createLoginToken,
  createEmailToken,
  verifyEmailToken,
  createForgotPasswordToken,
  verifyResetPasswordToken,
} = require("../utils/JWT");
const { sendEmail, sendEmailToResetPassword } = require("../utils/mail.config");
const { findClientById } = require("../utils/user");

// LOGIN
const postLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      code: "login_incomplete",
    });
  }

  // verify user
  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser) {
    return res.status(400).json({
      success: false,
      code: "user_notfound",
    });
  }

  // verify email
  if (!existingUser.verified) {
    return res.status(400).json({
      success: false,
      code: "user_unverified",
    });
  }

  const dbPassword = existingUser.dataValues.password;

  // verify hashed password
  const match = await bcrypt.compare(password, dbPassword);

  if (!match) {
    return res.status(400).json({
      success: false,
      code: "user_notfound",
    });
  }

  // create token
  const accessToken = createLoginToken(existingUser);

  // create cookie
  res.cookie("Access-token", accessToken, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 30 * 1000,
    domain: "localhost",
    sameSite: "Strict",
    path: "/",
  });

  res.json({
    success: true,
    code: "logged",
  });
};

const logout = async (req, res) => {
  // delete token
  try {
    res.clearCookie("Access-token");
  } catch (error) {
    return res.json({ succes: false, msg: "cookie_notfound" });
  }
  res.json({ success: true, msg: "cookie_deleted" });
};

// REGISTER
const postRegister = async (req, res) => {
  const {
    userName,
    identificationNumber,
    email,
    password,
    image,
    entityName,
    phoneNumber,
    entityType,
    country,
  } = req.body;

  if (
    !userName ||
    !email ||
    !password ||
    !identificationNumber ||
    !entityName ||
    !phoneNumber ||
    !entityType ||
    !country
  )
    return res.status(400).json({ sucess: false, code: "register_incomplete" });

  // verify unique data
  const existingUser = await User.findOne({ where: { email } });
  const existingIdentification = await User.findOne({
    where: { identificationNumber },
  });
  const existingPhoneNumber = await User.findOne({
    where: { phoneNumber },
  });

  if (existingUser || existingIdentification || existingPhoneNumber)
    return res.status(400).json({ success: false, code: "user_alreadyexist" });

  // Hash password
  bcrypt
    .hash(password, 10)
    .then(async (hash) => {
      // find or create an institution
      const [institution, created] = await Institution.findOrCreate({
        where: { entityName },
        defaults: { entityType },
      });

      // default image
      let jsonProfilePicture = {
        public_id: "userPicture/sp5dq8c8igvxki0b8kaq",
        url: "https://res.cloudinary.com/djcc03pyc/image/upload/v1677183559/userPicture/sp5dq8c8igvxki0b8kaq.png",
      };

      // if there is a image, create image by cloudinary
      if (image) {
        const upToCloud = await cloudinary.uploader.upload(image, {
          folder: "userPicture",
        });
        jsonProfilePicture = {
          public_id: upToCloud.public_id,
          url: upToCloud.secure_url,
        };
      }
      // Create user
      const user = await User.create({
        userName,
        identificationNumber,
        password: hash,
        email,
        phoneNumber,
        country,
        image: jsonProfilePicture,
        institutionId: institution.id,
      });

      // Create email token
      const emailToken = createEmailToken(email, user.dataValues.id);

      // Send email
      const testEmail = await sendEmail(email, emailToken);
    })
    .then(() => {
      res.status(201).json({ success: true, code: "user_created" });
    })
    .catch((err) => {
      return res.status(500).json({ err });
    });
};

// CONFIRM ACCOUNT
const confirmAccount = async (req, res) => {
  try {
    // get token
    const { token } = req.query;

    // verify data
    const data = await verifyEmailToken(token);

    if (data === null)
      return res.json({ success: false, code: "somethingwrong" });

    const { email, code } = data;
    // verify user
    const user = await User.findOne({ where: { email } });

    if (!user) return res.json({ success: false, code: "user_notfound" });

    // verify code
    if (code !== user.id)
      return res.json({ success: false, msg: "somethingwrong" });

    // update user
    User.update({ verified: true }, { where: { email } });

    // redirect to the component
    res.redirect("http://localhost:5173/mail-confirmed");
  } catch (error) {
    return res.status(400).json({ success: false, code: "somethingwrong" });
  }
};

const getProfile = async (req, res) => {
  // verify user
  const user = verify(req.cookies["Access-token"], process.env.JWT_SECRET);
  const { id } = user;

  const userData = await findClientById(id);
  const { userName, image } = userData;

  res.json({ id, userName, image, success: true });
};

const forgotPassword = async (req, res) => {
  // take data
  const { email } = req.body;

  try {
    // verify user
    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser)
      return res.json({ success: false, msg: "user_notfound" });

    // create token
    const link = createForgotPasswordToken(existingUser);

    // Send email
    const testEmail = await sendEmailToResetPassword(email, link);

    res.json({ success: true, code: "emailsended" });
  } catch (error) {
    res.json(error);
  }
};

const resetPassword = async (req, res) => {
  // take data
  const { id, token } = req.params;

  try {
    // verify user
    const existingUser = await User.findOne({ where: { id } });

    if (!existingUser)
      return res.json({ success: false, code: "user_notfound" });

    // verify token
    const verify = verifyResetPasswordToken(token);

    if (!verify) return res.send("Invalid Token");
    res.redirect(`http://localhost:5173/reset-password/${id}`); // hash id
  } catch (error) {
    res.json({ success: false, code: "user_unverified" });
  }
};

const resetPassPost = async (req, res) => {
  // take data
  const { id } = req.params;
  const { password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { id } });

    // verify user
    if (!existingUser)
      return res.json({ success: false, code: "User doesn't exist" });

    // Hash password
    bcrypt
      .hash(password, 10)
      .then(async (hash) => {
        // Update user password
        await User.update({ password: hash }, { where: { id } });
      })
      .then(() => {
        return res.json({ success: true, code: "password_updated" });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ success: false, code: "Something went wrong" });
      });
  } catch (error) {
    res.json({ success: false, code: "User doesn't verified" });
  }
};

module.exports = {
  postLogin,
  postRegister,
  getProfile,
  confirmAccount,
  forgotPassword,
  resetPassword,
  resetPassPost,
  logout,
};
