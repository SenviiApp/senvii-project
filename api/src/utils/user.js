const { User, Institution } = require("../db");

const findClientById = async (id) => {
  const result = await User.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: Institution,
        as: "entity",
      },
    ],
  });

  return result;
};

module.exports = {
  findClientById,
};
