"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    static associate(modles) {}
  }

  States.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "st_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "st_name",
      },
      st_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "st_propertyRegistrationId",
      },
    },
    {
      sequelize,
      modelName: "States",
      tableName: "states",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return States;
};
