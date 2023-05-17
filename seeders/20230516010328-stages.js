'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('stages', [
      {stage_name: 'Main Stage'},
      {stage_name: 'Megastructure'},
      {stage_name: 'Worldwide'},
      {stage_name: 'Oasis'},
      {stage_name: 'Live Stage'}
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stages', null, {});
  }
};
