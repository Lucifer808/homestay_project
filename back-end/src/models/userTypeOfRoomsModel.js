"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeOfRooms extends Model {
    static associate(modles) {
      TypeOfRooms.hasMany(modles.Room, {
        sourceKey: "tr_roomTypeId",
        foreignKey: "ro_roomTypeId",
        as: "trro_id",
      });
      TypeOfRooms.hasMany(modles.RoomPrices, {
        sourceKey: "tr_roomTypeId",
        foreignKey: "rp_roomTypeId",
        as: "trrp_id",
      });
      TypeOfRooms.hasMany(modles.TypeOfRoomImages, {
        sourceKey: "tr_roomTypeId",
        foreignKey: "tri_roomTypeId",
        as: "trtri_id",
      });
      TypeOfRooms.belongsTo(modles.Accommodations, {
        foreignKey: "tr_propertyRegistrationId",
        as: "trac_id",
      });
      TypeOfRooms.hasMany(modles.RoomTypeOfBed, {
        foreignKey: "tbr_roomTypeId",
        sourceKey: "tr_roomTypeId",
        as: "tbrtr_id",
      });
    }
  }

  TypeOfRooms.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "tr_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "tr_name",
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: "tr_isActive",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "tr_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "tr_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      tr_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "tr_propertyRegistrationId",
      },
      tr_roomTypeId: {
        type: DataTypes.STRING,
        field: "tr_roomTypeId",
      },
    },
    {
      sequelize,
      modelName: "TypeOfRooms",
      tableName: "type_room",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return TypeOfRooms;
};
