"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomTypeOfBed extends Model {
    static associate(modles) {}
  }

  RoomTypeOfBed.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "tbr_id",
      },
      nameOfBed: {
        type: DataTypes.STRING,
        field: "tbr_name",
      },
      desc: {
        type: DataTypes.STRING,
        field: "tbr_desc",
      },
      noOfBed: {
        type: DataTypes.INTEGER,
        field: "tbr_numOfBed",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "tbr_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "tbr_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      tbr_roomTypeId: {
        type: DataTypes.STRING,
        field: "tbr_roomTypeId",
      },
    },
    {
      sequelize,
      modelName: "RoomTypeOfBed",
      tableName: "type_bedOfRoom",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return RoomTypeOfBed;
};
