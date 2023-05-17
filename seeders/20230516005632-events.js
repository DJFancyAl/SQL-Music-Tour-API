'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
      name: 'Ultra Music Festival',
      date: '2023-05-20 12:00:00',
      start_time: '2023-05-20 12:00:00',
      end_time: '2023-05-22 22:00:00'
      },
      {
      name: 'Time Warp',
      date: '2023-07-18 12:00:00',
      start_time: '2023-07-18 12:00:00',
      end_time: '2023-07-20 22:00:00'
      },
      {
      name: 'Awakenings',
      date: '2023-08-04 12:00:00',
      start_time: '2023-08-04 12:00:00',
      end_time: '2023-08-06 24:00:00'
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  }
};
