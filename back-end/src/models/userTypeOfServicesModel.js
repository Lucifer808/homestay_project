"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserTypeOfServices extends Model {
    static associate(modles) {
      UserTypeOfServices.hasMany(modles.Users, {
        foreignKey: "id",
        sourceKey: "createdById",
      });
      UserTypeOfServices.hasMany(modles.UserServices, {
        foreignKey: "id",
        as: "svts_id",
      });
    }
  }

  UserTypeOfServices.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "ts_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "ts_nameOfTypeServices",
      },
      desc: {
        type: DataTypes.STRING,
        field: "ts_descOfTypeServices",
      },
      active: {
        type: DataTypes.BOOLEAN,
        field: "ts_active",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "ts_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "ts_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER(3),
        field: "ts_createdById",
        references: {
          model: "Users",
          key: "id",
        },
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "ts_updatedById",
      },
    },
    {
      sequelize,
      modelName: "UserTypeOfServices",
      tableName: "type_services",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return UserTypeOfServices;
};
