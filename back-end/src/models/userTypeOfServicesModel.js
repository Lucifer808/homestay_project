"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeOfServices extends Model {
    static associate(modles) {
      TypeOfServices.hasMany(modles.Users, {
        foreignKey: "id",
        sourceKey: "createdById",
      });
      TypeOfServices.hasMany(modles.Services, {
        foreignKey: "id",
        as: "svts_id",
      });
    }
  }

  TypeOfServices.init(
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
        type: DataTypes.DATE(3),
        field: "ts_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "ts_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
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
      modelName: "TypeOfServices",
      tableName: "type_services",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return TypeOfServices;
};
