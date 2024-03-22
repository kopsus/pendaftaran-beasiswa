// model untuk table hasil
"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Hasil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hasil.init(
    {
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      no_tlp: DataTypes.STRING,
      semester: DataTypes.STRING,
      ipk: DataTypes.FLOAT,
      beasiswa: DataTypes.STRING,
      berkas: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Hasil",
    }
  )
  return Hasil
}
