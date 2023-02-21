const { User } = require("../db");

const { findUser } = require("../utils/user");

const getUser = async (req, res) => {

  const result = await findUser("Sojo506")

  if (result) return res.status(200).json(result)
  return res.status(404).json("not found")
};

module.exports = { getUser };
