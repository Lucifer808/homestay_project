"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(modles) {}
  }

  Orders.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "uo_id",
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: "uo_phoneNumber",
      },
      smoke: {
        type: DataTypes.STRING,
        field: "uo_smoke",
      },
      bed: {
        type: DataTypes.STRING,
        field: "uo_bed",
      },
      message: {
        type: DataTypes.TEXT("medium"),
        field: "uo_message",
      },
      total: {
        type: DataTypes.DOUBLE,
        field: "uo_priceTotal",
      },
      checkIn: {
        type: DataTypes.DATE,
        field: "uo_checkIn",
      },
      checkOut: {
        type: DataTypes.DATE,
        field: "uo_checkOut",
      },
      numOfDays: {
        type: DataTypes.INTEGER,
        field: "uo_numOfDays",
      },
      numOfRooms: {
        type: DataTypes.INTEGER,
        field: "uo_numOfRooms",
      },
      numOfAudlts: {
        type: DataTypes.INTEGER,
        field: "uo_numOfAudlts",
      },
      numOfChildrens: {
        type: DataTypes.INTEGER,
        field: "uo_numOfChildrens",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "uo_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "uo_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "uo_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "uo_updatedById",
      },
      uo_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "uo_propertyRegistrationId",
      },
      uo_roomTypeId: {
        type: DataTypes.STRING,
        field: "uo_roomTypeId",
      },
    },
    {
      sequelize,
      modelName: "Orders",
      tableName: "user_order",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Orders;
};
