"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {
      UserRole.hasMany(models.Users, {
        foreignKey: "id",
        as: "uuid",
      });
    }
  }

  UserRole.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "ur_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "ur_name",
      },
      type: {
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
      modelName: "UserRole",
      tableName: "user_roles",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return UserRole;
};
