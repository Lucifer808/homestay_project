"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    static associate(modles) {
      Cities.belongsTo(modles.Accommodations, {
        foreignKey: "ci_propertyRegistrationId",
        targetKey: "ac_propertyRegistrationId",
        as: "acci_id",
      });
    }
  }

  Cities.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "ci_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "ci_name",
      },
      ci_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "ci_propertyRegistrationId",
      },
    },
    {
      sequelize,
      modelName: "Cities",
      tableName: "cities",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Cities;
};
