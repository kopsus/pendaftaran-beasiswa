// data seeding table hasil

"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Hasils", [
      {
        nama: "John Doe",
        email: "Jhone@gmail.com",
        no_tlp: "082324552",
        semester: "tujuh",
        ipk: 2.5,
        beasiswa: "Beasiswa akademik",
        berkas: null,
        status: "Belum di verifikasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "John Doe",
        email: "Jhone@gmail2.com",
        no_tlp: "082324552",
        semester: "tujuh",
        ipk: 3.5,
        beasiswa: "Beasiswa non akademik",
        berkas: null,
        status: "Belum di verifikasi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     */
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Hasils", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
  },
}
