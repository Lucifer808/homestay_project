"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userTypeOfAccommodationsHeader extends Model {
    static associate(modles) {
      userTypeOfAccommodationsHeader.hasMany(modles.userTypeOfAccommodations, {
        foreignKey: "id",
        as: "thta_id",
      });
    }
  }

  userTypeOfAccommodationsHeader.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "th_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "th_name",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "th_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "th_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "th_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "th_updatedById",
      },
    },
    {
      sequelize,
      modelName: "userTypeOfAccommodationsHeader",
      tableName: "type_accommodates_header",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return userTypeOfAccommodationsHeader;
};
