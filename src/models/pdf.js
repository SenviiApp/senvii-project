const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pdf",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      file: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    { timestamps: true }
  ); // to create createdAt/updatedAt
};
