const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('answer', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        text: {
            category: {

            },
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, { timestamps: true }); // to create createdAt/updatedAt
};