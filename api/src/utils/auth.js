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

// FUNCTIONS
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Not Enough Data" });

  const existingUser = await User.findOne({ where: { email } });

  if (!existingUser)
    return res.status(400).json({ error: "Usuario no existente" });

  if (!existingUser.verified)
    return res.status(400).json({ error: "Usuario no verificado" });

  const dbPassword = existingUser.dataValues.password;
  // verify hashed password
  const match = await bcrypt.compare(password, dbPassword).then((res) => res);

  if (!match)
    return res
      .status(400)
      .json({ error: "Algún dato proporcionado es incorrecto" });

  const accessToken = createLoginToken(existingUser);

  res.cookie("access-token", accessToken, {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 24 * 30 * 1000,
  });

  res.json("LOGGED IN");
};

const register = async (req, res) => {
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
    return res.status(400).json({ error: "Not Enough Data" });

  const existingUser = await User.findOne({ where: { email } });
  const existingIdentification = await User.findOne({
    where: { identificationNumber },
  });
  const existingPhoneNumber = await User.findOne({
    where: { phoneNumber },
  });

  if (existingUser || existingIdentification || existingPhoneNumber)
    return res.status(400).json({ error: "User Already Exist" });

  // Hash password
  bcrypt
    .hash(password, 10)
    .then(async (hash) => {
      // find or create an institution
      const [institution, created] = await Institution.findOrCreate({
        where: { entityName },
        defaults: { country, entityType },
      });
      let jsonProfilePicture = null;

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
        image: image
          ? jsonProfilePicture
          : {
              public_id: "userPicture/sp5dq8c8igvxki0b8kaq",
              url: "https://res.cloudinary.com/djcc03pyc/image/upload/v1677183559/userPicture/sp5dq8c8igvxki0b8kaq.png",
            },
        institutionId: institution.id,
      });

      // Create email token
      const emailToken = createEmailToken(email, user.dataValues.id);

      // Send email
      const testEmail = await sendEmail(email, emailToken);
    })
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      return res.status(400).json({ err });
    });
};

const confirm = async (req, res) => {
  try {
    // get token
    const { token } = req.params;

    // verify data
    const data = await verifyEmailToken(token);

    if (data === null)
      return res.json({ success: false, msg: "Error al obtener data" });

    const { email, code } = data;
    // verify user
    const user = await User.findOne({ where: { email } });

    if (!user) return res.json({ success: false, msg: "User doesn't exist" });

    // verify code
    if (code !== user.id)
      return res.json({ success: false, msg: "Code ins't equal" });

    // update user
    User.update({ verified: true }, { where: { email } });

    // redirect to the component
    res.redirect("http://localhost:5173/mail-confirmed");
  } catch (error) {
    return res.status(400).json({ err: "Something happened" });
  }
};

const profile = async (req, res) => {
  const user = verify(req.cookies["access-token"], process.env.JWT_SECRET);
  const { userName, id } = user;

  res.json({ userName, id });
};

const forgotPasswordAuth = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser)
      return res.json({ success: false, msg: "User doesn't exist" });

    const link = createForgotPasswordToken(existingUser);

    // Send email
    const testEmail = await sendEmailToResetPassword(email, link);

    res.json({ success: true, msg: "Email Send" });
  } catch (error) {
    res.json(error);
  }
};

const resetPasswordAuth = async (req, res) => {
  const { id, token } = req.params;

  try {
    const existingUser = await User.findOne({ where: { id } });

    if (!existingUser)
      return res.json({ success: false, msg: "User doesn't exist" });

    const verify = verifyResetPasswordToken(token);

    if (!verify) return res.send("Invalid Token");

    res.redirect(`http://localhost:5173/reset-password/${id}`); // change
  } catch (error) {
    res.json({ success: false, msg: "User doesn't verified" });
  }
};

const resetPasswordPost = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { id } });

    if (!existingUser)
      return res.json({ success: false, msg: "User doesn't exist" });

    // Hash password
    bcrypt
      .hash(password, 10)
      .then(async (hash) => {
        // Update user password
        await User.update({ password: hash }, { where: { id } });
      })
      .then(() => {
        res.json({ success: true, msg: "Password updated" });
      })
      .catch((err) => {
        return res
          .status(400)
          .json({ success: false, msg: "Something went wrong" });
      });

    res.redirect("http://localhost:5173"); // change
  } catch (error) {
    res.json({ success: false, msg: "User doesn't verified" });
  }
};

module.exports = {
  login,
  register,
  confirm,
  profile,
  forgotPasswordAuth,
  resetPasswordAuth,
  resetPasswordPost,
};
