'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('mahasiswas', [{
      nim: '1234567',
      nama: 'M. Hafidurrohman',
      birthdate: '2001-04-04',
      address: 'Probolinggo Jawa Timur',
      no_telp: '089213444324',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nim: '7654321',
      nama: 'M. Sibli aula',
      birthdate: '2000-04-04',
      address: 'Probolinggo Jawa Timur',
      no_telp: '089213444390',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nim: '4567890',
      nama: 'Alfiandi Rizky',
      birthdate: '2000-10-24',
      address: 'Probolinggo Jawa Timur',
      no_telp: '082213444786',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('mahasiswas', null, {});
  }
};
