"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Accommodations extends Model {
    static associate(modles) {
      Accommodations.belongsTo(modles.TypeOfAccommodations, {
        foreignKey: "ac_ta",
        targetKey: "id",
        as: "acta_id",
      });
      Accommodations.belongsTo(modles.RetalRegistration, {
        foreignKey: "ac_propertyRegistrationId",
        targetKey: "rr_propertyRegistrationId",
        as: "acrr_id",
      });
      Accommodations.hasMany(modles.Images, {
        foreignKey: "im_propertyRegistrationId",
        sourceKey: "ac_propertyRegistrationId",
        as: "acim_id",
      });
      Accommodations.hasMany(modles.DetailServicesOfAccoomadations, {
        foreignKey: "dsa_propertyRegistrationId",
        sourceKey: "ac_propertyRegistrationId",
        as: "acdas_id",
      });
      Accommodations.hasOne(modles.Cities, {
        foreignKey: "ci_propertyRegistrationId",
        sourceKey: "ac_propertyRegistrationId",
        as: "acci_id",
      });
      Accommodations.hasOne(modles.States, {
        foreignKey: "st_propertyRegistrationId",
        sourceKey: "ac_propertyRegistrationId",
        as: "acst_id",
      });
      Accommodations.hasOne(modles.Countries, {
        foreignKey: "ct_propertyRegistrationId",
        sourceKey: "ac_propertyRegistrationId",
        as: "acct_id",
      });
      Accommodations.hasMany(modles.TypeOfRooms, {
        foreignKey: "tr_propertyRegistrationId",
        sourceKey: "ac_propertyRegistrationId",
        as: "trac_id",
      });
    }
  }

  Accommodations.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false,
        field: "ac_id",
      },
      nameOfAccommodation: {
        type: DataTypes.STRING,
        field: "ac_name",
      },
      desc: {
        type: DataTypes.TEXT("medium"),
        field: "ac_desc",
      },
      rating: {
        type: DataTypes.INTEGER,
        field: "ac_rating",
      },
      area: {
        type: DataTypes.INTEGER,
        field: "ac_area",
      },
      policy: {
        type: DataTypes.TEXT("medium"),
        field: "ac_policy",
      },
      recommend: {
        type: DataTypes.TEXT("medium"),
        field: "ac_reccommend",
      },
      howToGetThere: {
        type: DataTypes.TEXT("medium"),
        field: "ac_howToGetThere",
      },
      paymentMethod: {
        type: DataTypes.STRING,
        field: "ac_paymentMethods",
      },
      priceBase: {
        type: DataTypes.INTEGER,
        field: "ac_basePrice",
      },
      accommodates: {
        type: DataTypes.INTEGER,
        field: "ac_accomodates",
      },
      noOfBedrooms: {
        type: DataTypes.INTEGER,
        field: "ac_numOfBedrooms",
      },
      noOfBathrooms: {
        type: DataTypes.INTEGER,
        field: "ac_numOfBathrooms",
      },
      address: {
        type: DataTypes.STRING,
        field: "ac_address",
      },
      welcome: {
        type: DataTypes.TEXT("medium"),
        field: "ac_welcome",
      },
      returnPolicy: {
        type: DataTypes.STRING,
        field: "ac_returnPolicy",
      },
      activeAt: {
        type: DataTypes.DATE,
        field: "ac_activeAt",
      },
      disabledAt: {
        type: DataTypes.DATE,
        field: "ac_disabledAt",
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: "ac_isActive",
      },
      createdAt: {
        type: DataTypes.DATE(3),
        field: "ac_createdAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      updatedAt: {
        type: DataTypes.DATE(3),
        field: "ac_updatedAt",
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP(4)"),
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "ac_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "ac_updatedById",
      },
      ac_ta: {
        type: DataTypes.INTEGER,
        field: "ac_ta",
      },
      ac_propertyRegistrationId: {
        type: DataTypes.STRING,
        field: "ac_propertyRegistrationId",
      },
      ac_dc: {
        type: DataTypes.INTEGER,
        field: "ac_dc",
      },
      ac_latitude: {
        type: DataTypes.DECIMAL(10, 8),
        field: "ac_latitude",
      },
      ac_longtitude: {
        type: DataTypes.DECIMAL(11, 8),
        field: "ac_longtitude",
      },
      ac_latlong: {
        type: DataTypes.GEOMETRY("POINT"),
        field: "ac_latlong",
      },
    },
    {
      sequelize,
      modelName: "Accommodations",
      tableName: "accommodates",
      freezeTableName: true,
      timestamps: false,
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );
  // Accommodations.removeAttribute("id")
  return Accommodations;
};
// Chưa liên kết đến discount
