"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userTypeOfAccommodations extends Model {
    static associate(modles) {
      userTypeOfAccommodations.hasMany(modles.userAccommodations, {
        foreignKey: "id",
        as: "acta_id",
      });
      userTypeOfAccommodations.belongsTo(
        modles.userTypeOfAccommodationsHeader,
        {
          foreignKey: "ta_th",
          targetKey: "id",
          as: "thta_id",
        }
      );
    }
  }

  userTypeOfAccommodations.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "ta_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "ta_nameOfAccommodates",
      },
      desc: {
        type: DataTypes.STRING,
        field: "ta_desc",
      },
      active: {
        type: DataTypes.BOOLEAN,
        field: "ta_active",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "ta_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "ta_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "ta_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "ta_updatedById",
      },
      ta_th: {
        type: DataTypes.INTEGER,
        field: "ta_th",
      },
    },
    {
      sequelize,
      modelName: "userTypeOfAccommodations",
      tableName: "type_accommodates",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return userTypeOfAccommodations;
};
