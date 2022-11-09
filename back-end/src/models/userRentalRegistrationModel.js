"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RetalRegistration extends Model {
    static associate(modles) {
      RetalRegistration.belongsTo(modles.Users, {
        foreignKey: "rr_user",
        targetKey: "id",
        as: "rr_userId",
      });
    }
  }

  RetalRegistration.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "rr_id",
      },
      status: {
        type: DataTypes.STRING,
        field: "rr_status",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "rr_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "rr_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "rr_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "rr_updatedById",
      },
      rr_user: {
        type: DataTypes.INTEGER,
        field: "rr_user",
      },
      ac_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "rr_propertyRegistratonId",
      },
    },
    {
      sequelize,
      modelName: "RetalRegistration",
      tableName: "retal_registration",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return RetalRegistration;
};
