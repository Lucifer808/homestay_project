"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserStates extends Model {
    static associate(modles) {}
  }

  UserStates.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "urs_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "urs_name",
      },
      urs_us: {
        type: DataTypes.INTEGER,
        field: "urs_us",
      },
    },
    {
      sequelize,
      modelName: "UserStates",
      tableName: "user_states",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return UserStates;
};
