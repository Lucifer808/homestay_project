"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserServices extends Model {
    static associate(modles) {
      UserServices.belongsTo(modles.UserTypeOfServices, {
        foreignKey: "sv_ts",
        targetKey: "id",
        as: "svts_id",
      });
    }
  }

  UserServices.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "sv_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "sv_nameOfService",
      },
      desc: {
        type: DataTypes.STRING,
        field: "sv_descOfService",
      },
      active: {
        type: DataTypes.BOOLEAN,
        field: "sv_active",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "sv_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "sv_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "sv_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "sv_updatedById",
      },
      sv_ts: {
        type: DataTypes.INTEGER,
        field: "sv_ts",
      },
    },
    {
      sequelize,
      modelName: "UserServices",
      tableName: "services",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return UserServices;
};
