"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discounts extends Model {
    static associate(modles) {}
  }

  Discounts.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        field: "dc_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "dc_name",
      },
      percentDiscount: {
        type: DataTypes.INTEGER,
        field: "dc_percentDiscount",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "dc_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "dc_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
    },
    {
      sequelize,
      modelName: "Discounts",
      tableName: "type_room",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Discounts;
};
