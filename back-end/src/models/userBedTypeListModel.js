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
        field: "tb_id",
      },
      name: {
        type: DataTypes.STRING,
        field: "tb_name",
      },
      desc: {
        type: DataTypes.STRING,
        field: "tb_desc",
      },
    },
    {
      sequelize,
      modelName: "BedTypeList",
      tableName: "type_beds",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return BedTypeList;
};
