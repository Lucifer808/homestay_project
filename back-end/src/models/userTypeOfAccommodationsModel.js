"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TypeOfAccommodations extends Model {
    static associate(modles) {
      TypeOfAccommodations.hasMany(modles.Accommodations, {
        foreignKey: "id",
        as: "acta_id",
      });
      TypeOfAccommodations.belongsTo(modles.TypeOfAccommodationsHeader, {
        foreignKey: "ta_th",
        targetKey: "id",
        as: "thta_id",
      });
    }
  }

  TypeOfAccommodations.init(
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
      modelName: "TypeOfAccommodations",
      tableName: "type_accommodates",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return TypeOfAccommodations;
};
