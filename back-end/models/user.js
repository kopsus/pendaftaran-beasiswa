// model untuk table user
"use strict"
const { Model } = require("sequelize")
const bcrypt = require("bcrypt")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      nim: DataTypes.INTEGER,
      ipk: DataTypes.FLOAT,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",

      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = bcrypt.genSaltSync(10)
            user.password = bcrypt.hashSync(user.password, salt)
          }
        },
      },
    }
  )
  User.prototype.CorrectPassword = async (reqPassword, passwordDb) => {
    return await bcrypt.compareSync(reqPassword, passwordDb)
  }
  return User
}
