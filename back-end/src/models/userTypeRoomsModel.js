"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeRooms extends Model {
    static associate(modles) {}
  }

  TypeRooms.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        field: "tr_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "tr_name",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "ror_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "ror_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      tr_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "tr_propertyRegistrationId",
      },
    },
    {
      sequelize,
      modelName: "TypeRooms",
      tableName: "type_room",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return TypeRooms;
};
