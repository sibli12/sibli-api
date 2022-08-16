'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pelanggaran', {
      id_pelanggaran: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nis: {
        type: Sequelize.STRING
      },
      kasus: {
        type: Sequelize.TEXT
      },
      kronologis: {
        type: Sequelize.TEXT
      },
      tanggal: {
        type: Sequelize.STRING
      },
      tempat: {
        type: Sequelize.STRING
      },
      ketr: {
        type: Sequelize.TEXT
      },
      sanksi: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      id_pengurus: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pelanggaran');
  }
};