const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "institution",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      entity: {
        type: DataTypes.ENUM(["Privada", "Pública"]),
        allowNull: false,
      },
      institutionName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  ); // to create createdAt/updatedAt
};
