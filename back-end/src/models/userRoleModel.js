"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userRole extends Model {}

  userRole.init(
    {
      userRoleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "ur_id",
      },
      userRoleName: {
        type: DataTypes.STRING,
        field: "ur_name",
      },
      userRoleType: {
        type: DataTypes.STRING,
        field: "ur_type",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "ur_createdAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "ur_updatedAt",
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "ur_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "ur_updatedById",
      },
    },
    {
      sequelize,
      modelName: "userRole",
    }
  );
  return userRole;
};
