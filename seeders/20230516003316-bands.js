'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [
      {
      name: 'Eric Prydz',
      genre: 'Progressive House',
      available_start_time: '2023-05-20 12:00:00',
      end_time: '2023-05-20 22:00:00'
      },
      {
      name: 'Maceo Plex',
      genre: 'Techno',
      available_start_time: '2023-05-20 14:00:00',
      end_time: '2023-05-20 24:00:00'
      },
      {
      name: 'Adam Beyer',
      genre: 'Techno',
      available_start_time: '2023-05-21 14:00:00',
      end_time: '2023-05-20 22:00:00'
      },
      {
      name: 'Axwell',
      genre: 'House',
      available_start_time: '2023-05-21 12:00:00',
      end_time: '2023-05-20 24:00:00'
      },
      {
      name: 'Anna',
      genre: 'Techno',
      available_start_time: '2023-05-22 16:00:00',
      end_time: '2023-05-22 24:00:00'
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bands', null, {});
  }
};
