"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeOfRoomImages extends Model {
    static associate(modles) {
      TypeOfRoomImages.belongsTo(modles.TypeOfRooms, {
        foreignKey: "tri_roomTypeId",
        as: "trtri_id",
      });
    }
  }

  TypeOfRoomImages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "tri_id",
      },
      type: {
        type: DataTypes.STRING,
        field: "tri_type",
      },
      name: {
        type: DataTypes.STRING,
        field: "tri_name",
      },
      path: {
        type: DataTypes.STRING,
        field: "tri_path",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "tri_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "tri_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      tri_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "tri_propertyRegistrationId",
      },
      tri_roomTypeId: {
        type: DataTypes.STRING,
        field: "tri_roomTypeId",
      },
    },
    {
      sequelize,
      modelName: "TypeOfRoomImages",
      tableName: "type_roomImages",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return TypeOfRoomImages;
};
