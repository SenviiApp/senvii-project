const { User, Institution } = require("../db");
const bcrypt = require("bcrypt");

const { findClientById } = require("../utils/user");

const getUser = async (req, res) => {
  // get data
  const { id } = req.params;

  try {
    // verify user
    const user = await findClientById(id);
    if (user) return res.status(200).json(user.dataValues);
  } catch (error) {
    return res.status(404).json("not found");
  }
};

const changePassword = async (req, res) => {
  // get data
  const { id, password } = req.body;

  try {
    // verify user
    const user = await findClientById(id);
    if (!user.dataValues)
      return res.status(404).json({ success: false, code: "user_notfound" });
    // Hash password
    bcrypt
      .hash(password, 10)
      .then(async (hash) => {
        User.update({ password: hash }, { where: { id } });
      })
      .then(() => {
        res.json({ success: true, code: "passwordchanged" });
      })
      .catch((err) => {
        return res.status(400).json({ err });
      });
  } catch (error) {
    return res.status(404).json({ success: false, code: "somethingwrong" });
  }
};

const editProfile = async (req, res) => {
  // get data
  const { id } = req.params;

  /*  if (
    !userName ||
    !identificationNumber ||
    !entityName ||
    !phoneNumber ||
    !entityType ||
    !country
  )
    return res.status(400).json({ sucess: false, code: "register_incomplete" }); */
  if (req.body.identificationNumber) {
  }
  if (req.body.userName) {
  }
  if (req.body.phoneNumber) {
  }

  // verify unique data
  const existingUser = await User.findOne({ where: { id } });
  const existingIdentification = await User.findOne({
    where: { identificationNumber },
  });
  const existingPhoneNumber = await User.findOne({
    where: { phoneNumber },
  });

  if (existingUser || existingIdentification || existingPhoneNumber)
    return res.status(400).json({ success: false, code: "user_alreadyexist" });

  // find or create an institution
  const [institution, created] = await Institution.findOrCreate({
    where: { entityName },
    defaults: { country, entityType },
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

  // update user
  User.update(
    {
      userName,
      identificationNumber,
      phoneNumber,
      image: jsonProfilePicture,
      institutionId: institution.id,
    },
    { where: { id } }
  );
};

module.exports = { getUser, changePassword, editProfile };
