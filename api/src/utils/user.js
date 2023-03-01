const { User, Institution } = require("../db");

const findClientById = async (id) => {
  const result = await User.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: Institution,
      },
    ],
  });

  return result;
};

module.exports = {
  findClientById,
};
