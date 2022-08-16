'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_santri', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nis: {
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      tempat: {
        type: Sequelize.STRING
      },
      tanggal: {
        type: Sequelize.STRING
      },
      jkl: {
        type: Sequelize.STRING
      },
      desa: {
        type: Sequelize.STRING
      },
      kec: {
        type: Sequelize.STRING
      },
      kab: {
        type: Sequelize.STRING
      },
      k_formal: {
        type: Sequelize.STRING
      },
      t_formal: {
        type: Sequelize.STRING
      },
      k_madin: {
        type: Sequelize.STRING
      },
      r_madin: {
        type: Sequelize.STRING
      },
      komplek: {
        type: Sequelize.STRING
      },
      kamar: {
        type: Sequelize.STRING
      },
      bapak: {
        type: Sequelize.STRING
      },
      ibu: {
        type: Sequelize.STRING
      },
      hp: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
      },
      stts: {
        type: Sequelize.STRING
      },
      t_kos: {
        type: Sequelize.INTEGER
      },
      ket: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_santri');
  }
};