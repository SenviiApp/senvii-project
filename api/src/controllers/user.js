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
  const { userName, phoneNumber, image, entityName } = req.body;

  const existingUser = User.findOne({ where: { id } });

  if (!existingUser)
    return res.status(400).json({ success: false, code: "user_doesn't_exist" });

  // verify fields
  const verify = req.body.some((data) => data === "");

  if (verify) res.status(400).json({ success: false, code: "not_enoughdata" });

  // verify unique data
  if (userName) {
    const existingUser = User.findOne({ where: { userName } });

    if (existingUser)
      return res.status(400).json({ success: false, code: "user_alreadyexist" });
  }
  if (phoneNumber) {
    const existingUser = User.findOne({ where: { phoneNumber } });

    if (existingUser)
      return res.status(400).json({ success: false, code: "user_alreadyexist" });
  }

  // find or create an institution
  if (entityName) {
    const institution = await Institution.findOne({
      where: { entityName },
    });

    // update user

    if (institution) {
      User.update(
        {
          institutionId: institution.id,
        },
        { where: { id } }
      );
    } else {
      return res
        .status(400)
        .json({ success: false, code: "entity_doesn't_exist" });
    }
  }

  // if there is a image, create image by cloudinary
  if (image) {
    const upToCloud = await cloudinary.uploader.upload(image, {
      folder: "userPicture",
    });
    const jsonProfilePicture = {
      public_id: upToCloud.public_id,
      url: upToCloud.secure_url,
    };

    User.update(
      {
        ...req.body,
        image: jsonProfilePicture,
      },
      { where: { id } }
    );

    return res.status(200).json({ success: true, code: "user_updated" });
  } else {
    // update user
    User.update(
      {
        ...req.body,
      },
      { where: { id } }
    );
    return res.status(200).json({ success: true, code: "user_updated" });
  }
};

module.exports = { getUser, changePassword, editProfile };
