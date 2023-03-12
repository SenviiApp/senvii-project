const { User, Institution, Pdf } = require("../db");
const cloudinary = require("../utils/cloudinary");
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

  // filter req.body
  let data = {};
  for (const prop in req.body) {
    if (req.body[prop] !== "" && req.body[prop] !== null) {
      data[prop] = req.body[prop];
    }
  }

  const { userName, phoneNumber, image, entityName } = data;

  const existingUser = await User.findOne({ where: { id } });

  if (!existingUser)
    return res.status(400).json({ success: false, code: "user_doesn't_exist" });

  // verify unique data
  if (userName) {
    const existingUser = await User.findOne({ where: { userName } });

    if (existingUser)
      return res
        .status(400)
        .json({ success: false, code: "user_alreadyexist" });
  }
  if (phoneNumber) {
    const existingUser = await User.findOne({ where: { phoneNumber } });

    if (existingUser)
      return res
        .status(400)
        .json({ success: false, code: "user_alreadyexist" });
  }

  // find or create an institution
  if (entityName) {
    const institution = await Institution.findOne({
      where: { entityName },
    });

    // update user

    if (institution) {
      await User.update(
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

    await User.update(
      {
        ...data,
        image: jsonProfilePicture,
      },
      { where: { id } }
    );

    return res.status(200).json({ success: true, code: "user_updated" });
  } else {
    // update user
    await User.update(
      {
        ...data,
      },
      { where: { id } }
    );
    return res.status(200).json({ success: true, code: "user_updated" });
  }
};

const uploadPDF = async (req, res) => {
  const { id } = req.params;
  const { name, email, pdf } = req.body;
  
  const response = await cloudinary.uploader.upload(pdf, {
    folder: "userPdf",
    tags: ["pdf"],
  });
  try {
    await Pdf.create({
      file: {
        public_id: response.public_id,
        url: response.secure_url,
      },
      userId: id,
    });

    sendEmailToNotifyPdf(name, email, response.secure_url);

    res.status(201).json({ success: true, code: "pdf_created" });
  } catch (error) {
    return res.status(500).json({ err });
  }
};

module.exports = { getUser, changePassword, editProfile, uploadPDF };
