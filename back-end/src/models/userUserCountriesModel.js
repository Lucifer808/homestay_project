"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCountries extends Model {
    static associate(modles) {}
  }

  UserCountries.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "urc_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "urc_name",
      },
      urc_us: {
        type: DataTypes.INTEGER,
        field: "urc_us",
      },
    },
    {
      sequelize,
      modelName: "UserCountries",
      tableName: "user_country",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return UserCountries;
};
