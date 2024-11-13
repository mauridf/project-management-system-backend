'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Tarefas', 'prioridade', {
      type: Sequelize.STRING,
      allowNull: true, // Defina conforme a necessidade
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Tarefas', 'prioridade');
  }
};
