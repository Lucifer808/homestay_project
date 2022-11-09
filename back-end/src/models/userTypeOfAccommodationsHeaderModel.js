"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeOfAccommodationsHeader extends Model {
    static associate(modles) {
      TypeOfAccommodationsHeader.hasMany(modles.TypeOfAccommodations, {
        foreignKey: "id",
        as: "thta_id",
      });
    }
  }

  TypeOfAccommodationsHeader.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "th_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "th_name",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "th_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "th_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "th_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "th_updatedById",
      },
    },
    {
      sequelize,
      modelName: "TypeOfAccommodationsHeader",
      tableName: "type_accommodates_header",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return TypeOfAccommodationsHeader;
};
