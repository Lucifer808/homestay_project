"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRetalRegistration extends Model {}

  UserRetalRegistration.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "rr_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "rr_status",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "rr_createdAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "rr_updatedAt",
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "rr_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "rr_updatedById",
      },
    },
    {
      sequelize,
      modelName: "UserRetalRegistration",
      tableName: "retal_registration",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return UserRetalRegistration;
};
