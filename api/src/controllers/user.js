const { User } = require("../db");
const bcrypt = require("bcrypt");

const { findClientById } = require("../utils/user");

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await findClientById(id);
    if (user) return res.status(200).json(user.dataValues);
  } catch (error) {
    return res.status(404).json("not found");
  }
};

const changePassword = async (req, res) => {
  const { id, password } = req.body;

  try {
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

module.exports = { getUser, changePassword };
