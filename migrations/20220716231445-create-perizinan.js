'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('perizinan', {
      id_perizinan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nis: {
        type: Sequelize.STRING
      },
      tujuan: {
        type: Sequelize.STRING
      },
      keperluan: {
        type: Sequelize.TEXT
      },
      tgl_pulang: {
        type: Sequelize.STRING
      },
      wajib_kembali: {
        type: Sequelize.STRING
      },
      tgl_kembali: {
        type: Sequelize.STRING
      },
      syarat: {
        type: Sequelize.STRING
      },
      keterangan: {
        type: Sequelize.INTEGER
      },
      konfir: {
        type: Sequelize.INTEGER
      },
      id_pengurus: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('perizinan');
  }
};