const { Client } = require("../db");

const findClient = async (client) => {
  const result = await Client.findOne({
    where: {
      userName: client,
    },
  });

  return result;
};

module.exports = {
  findClient,
};
