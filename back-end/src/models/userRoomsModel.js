"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(modles) {}
  }

  Room.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "ro_id",
      },
      noOfBed: {
        type: DataTypes.INTEGER,
        field: "ro_numOfBed",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "ro_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "ro_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "ro_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "ro_updatedById",
      },
      ro_tb: {
        type: DataTypes.INTEGER,
        field: "ro_tb",
      },
    },
    {
      sequelize,
      modelName: "Room",
      tableName: "room",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Room;
};
