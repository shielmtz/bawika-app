"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash("1234567890", 10); // Ganti dengan password user
    // Tambahkan data ke tabel
    await queryInterface.bulkInsert("Users", [
      {
        name: "Admin",
        email: "admin@example.com",
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: "admin",
      },
      {
        name: "User 1",
        email: "user@example.com",
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
        role: "user",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Hapus data dari tabel
    await queryInterface.bulkDelete("Users", null, {});
  },
};
