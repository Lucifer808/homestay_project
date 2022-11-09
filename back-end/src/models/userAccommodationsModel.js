"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Accommodations extends Model {
    static associate(modles) {
      Accommodations.belongsTo(modles.TypeOfAccommodations, {
        foreignKey: "ac_ta",
        targetKey: "id",
        as: "acta_id",
      });
    }
  }

  Accommodations.init(
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
      desc: {
        type: DataTypes.STRING,
        field: "ac_desc",
      },
      rating: {
        type: DataTypes.INTEGER,
        field: "ac_rating",
      },
      area: {
        type: DataTypes.INTEGER,
        field: "ac_area",
      },
      policy: {
        type: DataTypes.STRING,
        field: "ac_policy",
      },
      recommend: {
        type: DataTypes.STRING,
        field: "ac_reccommend",
      },
      howToGetThere: {
        type: DataTypes.STRING,
        field: "ac_howToGetThere",
      },
      paymentMethod: {
        type: DataTypes.STRING,
        field: "ac_paymentMethods",
      },
      priceBase: {
        type: DataTypes.INTEGER,
        field: "ac_basePrice",
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
      ac_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "ac_propertyRegistrationId",
      },
    },
    {
      sequelize,
      modelName: "Accommodations",
      tableName: "accommodates",
      freezeTableName: true,
      timestamps: false,
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );
  return Accommodations;
};
