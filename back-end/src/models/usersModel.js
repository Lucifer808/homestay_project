"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {}

  users.init(
    {
      usersId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        field: "us_id",
      },
      userName: {
        type: DataTypes.STRING,
        field: "us_userName",
      },
      email: {
        type: DataTypes.STRING,
        field: "us_email",
      },
      password: {
        type: DataTypes.STRING,
        field: "us_password",
      },
      fristName: {
        type: DataTypes.STRING,
        field: "us_firstName",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "us_lastName",
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: "us_phoneNumber",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "us_createdAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "us_updatedAt",
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "us_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "us_updatedById",
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
