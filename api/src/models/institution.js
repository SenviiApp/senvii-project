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
        type: DataTypes.ENUM(["Privado", "Público"]),
        allowNull: false,
      },
      institutionName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.JSON({
          country: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          state: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          city: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          streetAndNumber: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        }),
        allowNull: false,
      },
      businessActivity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  ); // to create createdAt/updatedAt
};
