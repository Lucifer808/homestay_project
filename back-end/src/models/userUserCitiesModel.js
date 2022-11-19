"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCities extends Model {
    static associate(modles) {}
  }

  UserCities.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "urci_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "urci_name",
      },
      urci_us: {
        type: DataTypes.INTEGER,
        field: "urci_us",
      },
    },
    {
      sequelize,
      modelName: "UserCities",
      tableName: "user_city",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return UserCities;
};
