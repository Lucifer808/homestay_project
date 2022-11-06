"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BedTypeList extends Model {
    static associate(modles) {}
  }

  BedTypeList.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "bt_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "bt_name",
      },
      desc: {
        type: DataTypes.STRING,
        field: "bt_desc",
      },
    },
    {
      sequelize,
      modelName: "BedTypeList",
      tableName: "bed_typeList",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return BedTypeList;
};
