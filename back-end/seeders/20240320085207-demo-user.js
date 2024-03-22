// data seeding table user

"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        nim: 21102307,
        ipk: 3.5,
        password: "ahay",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nim: 21102067,
        ipk: 2.5,
        password: "ahay",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Users', null, {});
     */
  },
}
