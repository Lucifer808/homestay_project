"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailServicesOfAccoomadations extends Model {
    static associate(modles) {
      DetailServicesOfAccoomadations.belongsTo(modles.Accommodations, {
        foreignKey: "dsa_propertyRegistrationId",
        targetKey: "ac_propertyRegistrationId",
        as: "acdas_id",
      });
      DetailServicesOfAccoomadations.hasMany(modles.Services, {
        foreignKey: "id",
        sourceKey: "dsa_sv",
        as: "dsasv_id",
      });
    }
  }

  DetailServicesOfAccoomadations.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "dsa_id",
      },
      dsa_sv: {
        type: DataTypes.INTEGER,
        field: "dsa_sv",
      },
      dsa_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "dsa_propertyRegistrationId",
      },
    },
    {
      sequelize,
      modelName: "DetailServicesOfAccoomadations",
      tableName: "detail_servicesOfAccommodates",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return DetailServicesOfAccoomadations;
};
