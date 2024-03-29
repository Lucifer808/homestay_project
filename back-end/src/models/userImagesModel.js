"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    static associate(modles) {
      Images.belongsTo(modles.Accommodations, {
        foreignKey: "im_propertyRegistrationId",
        targetKey: "ac_propertyRegistrationId",
        as: "acim_id",
      });
    }
  }

  Images.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "im_id",
      },
      type: {
        type: DataTypes.STRING,
        field: "im_type",
      },
      name: {
        type: DataTypes.STRING,
        field: "im_name",
      },
      path: {
        type: DataTypes.STRING,
        field: "im_path",
      },
      desc: {
        type: DataTypes.STRING,
        field: "im_desc",
      },
      im_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "im_propertyRegistrationId",
      },
    },
    {
      sequelize,
      modelName: "Images",
      tableName: "images",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Images;
};
