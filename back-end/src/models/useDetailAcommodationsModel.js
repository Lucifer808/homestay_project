"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailAccommodations extends Model {
    static associate(modles) {}
  }

  DetailAccommodations.init(
    {
      accommodates: {
        type: DataTypes.INTEGER,
        field: "da_acommodates",
      },
      noOfBedrooms: {
        type: DataTypes.INTEGER,
        field: "da_noOfBedrooms",
      },
      noOfBathrooms: {
        type: DataTypes.INTEGER,
        field: "da_noOfBathrooms",
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "da_createById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "da_updatedById",
      },
    },
    {
      sequelize,
      modelName: "DetailAccommodations",
      tableName: "detail_accommodates",
      freezeTableName: true,
      timestamps: false,
    }
  );
  DetailAccommodations.removeAttribute("id");
  return DetailAccommodations;
};
// Đã bỏ trong CDM
