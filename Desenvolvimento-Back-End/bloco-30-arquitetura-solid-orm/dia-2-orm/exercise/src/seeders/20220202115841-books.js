'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'O amanhecer com ORM',
          author: 'Arquiteto de Software',
          page_quantity: 400,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'A dedicação e persistencia',
          author: 'Amós Rodrigues',
          page_quantity: 500,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', null, {});
  },
};
