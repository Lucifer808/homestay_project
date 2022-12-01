"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(modles) {
      Room.belongsTo(modles.TypeOfRooms, {
        foreignKey: "ro_roomTypeId",
        as: "trro_id",
      });
    }
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
      noOfAdult: {
        type: DataTypes.INTEGER,
        field: "ro_numOfAdult",
      },
      noOfChildren: {
        type: DataTypes.INTEGER,
        field: "ro_numOfChildren",
      },
      allowChildren: {
        type: DataTypes.BOOLEAN,
        field: "ro_allowChildren",
      },
      area: {
        type: DataTypes.INTEGER,
        field: "ro_area",
      },
      viewOfRoom: {
        type: DataTypes.STRING,
        field: "ro_viewOfRoom",
      },
      numTypeOfRoom: {
        type: DataTypes.INTEGER,
        field: "ro_roomQuantity",
      },
      noOfBathrooms: {
        type: DataTypes.INTEGER,
        field: "ro_numOfBathroom",
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
      ro_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "ro_propertyRegistrationId",
      },
      ro_roomTypeId: {
        type: DataTypes.STRING,
        field: "ro_roomTypeId",
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
