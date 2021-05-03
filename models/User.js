const { Model, DataTypes } = require("sequelize");
const sequelize = require("sequelize");
const bcrypt = require("bcryptjs");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

module.exports = User;
