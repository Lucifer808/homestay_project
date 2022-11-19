"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    // user associate
    static associate(models) {
      Users.belongsTo(models.UserRole, {
        foreignKey: "us_role",
        targetKey: "id",
        as: "uuid",
      });
      Users.hasMany(models.RetalRegistration, {
        foreignKey: "id",
        as: "rr_userId",
      });
    }
  }

  Users.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        field: "us_id",
      },
      userName: {
        type: DataTypes.STRING,
        field: "us_userName",
      },
      email: {
        type: DataTypes.STRING,
        field: "us_email",
      },
      password: {
        type: DataTypes.STRING,
        field: "us_password",
      },
      firstName: {
        type: DataTypes.STRING,
        field: "us_firstName",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "us_lastName",
      },
      address: {
        type: DataTypes.STRING,
        field: "us_address",
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: "us_phoneNumber",
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        field: "us_dateOfBirth",
      },
      national: {
        type: DataTypes.STRING,
        field: "us_national",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "us_createdAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "us_updatedAt",
      },
      createdById: {
        type: DataTypes.INTEGER,
        field: "us_createdById",
      },
      updatedById: {
        type: DataTypes.INTEGER,
        field: "us_updatedById",
      },
      us_role: {
        type: DataTypes.INTEGER,
        field: "us_role",
        defaultValue: 1,
      },
    },
    {
      // user hash password
      hooks: {
        beforeCreate: async (user, options) => {
          if (!user.changed("password")) {
            return user.password;
          }
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        },
      },
      sequelize,
      modelName: "Users",
      tableName: "Users",
      freezeTableName: true,
      timestamps: false,
    }
  );
  // User validate password
  Users.prototype.validatePassword = function (password) {
    const comparePassword = bcrypt.compareSync(password, this.password);
    return comparePassword;
  };
  // JWT
  Users.prototype.getJWTToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  return Users;
};
