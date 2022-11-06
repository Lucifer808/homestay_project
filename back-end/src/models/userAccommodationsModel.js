"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userAccommodations extends Model {
    static associate(modles) {
      userAccommodations.belongsTo(modles.userTypeOfAccommodations, {
        foreignKey: "ac_ta",
        targetKey: "id",
        as: "acta_id",
      });
    }
  }

  userAccommodations.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "ac_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "ac_name",
      },
      address: {
        type: DataTypes.STRING,
        field: "ac_address",
      },
      rating: {
        type: DataTypes.INTEGER,
        field: "ac_rating",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "ac_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "ac_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "ac_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "ac_updatedById",
      },
      ac_ta: {
        type: DataTypes.INTEGER,
        field: "ac_ta",
      },
    },
    {
      sequelize,
      modelName: "userAccommodations",
      tableName: "accommodates",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return userAccommodations;
};
