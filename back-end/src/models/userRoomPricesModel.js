"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RoomPrices extends Model {
    static associate(modles) {
      RoomPrices.belongsTo(modles.TypeOfRooms, {
        foreignKey: "rp_roomTypeId",
        as: "trrp_id",
      });
    }
  }

  RoomPrices.init(
    {
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "rp_price",
      },
      minPrice: {
        type: DataTypes.INTEGER,
        field: "rp_minPrice",
      },
      maxPrice: {
        type: DataTypes.INTEGER,
        field: "rp_maxPrice",
      },
      active: {
        type: DataTypes.BOOLEAN,
        field: "rp_active",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "rp_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "rp_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      rp_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "rp_propertyRegistrationId",
      },
      rp_roomTypeId: {
        type: DataTypes.STRING,
        field: "rp_roomTypeId",
      },
      rp_ds: {
        type: DataTypes.INTEGER,
        field: "rp_ds",
      },
    },
    {
      sequelize,
      modelName: "RoomPrices",
      tableName: "room_price",
      freezeTableName: true,
      timestamps: false,
    }
  );
  RoomPrices.removeAttribute("id");
  return RoomPrices;
};
// Chưa liên kết đến loại phòng
