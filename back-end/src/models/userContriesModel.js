"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    static associate(modles) {
      Countries.belongsTo(modles.Accommodations, {
        foreignKey: "ct_propertyRegistrationId",
        targetKey: "ac_propertyRegistrationId",
        as: "acct_id",
      });
    }
  }

  Countries.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "ct_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "ct_name",
      },
      ct_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "ct_propertyRegistrationId",
      },
    },
    {
      sequelize,
      modelName: "Countries",
      tableName: "countries",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Countries;
};
