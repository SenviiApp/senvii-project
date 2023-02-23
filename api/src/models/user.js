const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      identificationNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.JSON,
        defaultValue: {
          public_id: "userPicture/sp5dq8c8igvxki0b8kaq",
          url: "https://res.cloudinary.com/djcc03pyc/image/upload/v1677183559/userPicture/sp5dq8c8igvxki0b8kaq.png",
        }, // url cloudinary
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { timestamps: true }
  ); // to create createdAt/updatedAt
};
