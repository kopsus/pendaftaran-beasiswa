// migration untuk table hasil

"use strict"
const { sequelize } = require("../models")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Hasils", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      no_tlp: {
        type: Sequelize.STRING,
      },
      semester: {
        type: Sequelize.STRING,
      },
      ipk: {
        type: Sequelize.FLOAT,
      },
      beasiswa: {
        type: Sequelize.STRING,
      },
      berkas: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Hasils")
  },
}
