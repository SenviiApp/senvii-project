const { User } = require("../db");

const findClientById = async (id) => {
  const result = await User.findOne({
    where: {
      id: id,
    },
  });

  return result;
};

module.exports = {
  findClientById,
};
