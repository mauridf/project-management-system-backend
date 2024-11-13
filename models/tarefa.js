module.exports = (sequelize, DataTypes) => {
  const Tarefa = sequelize.define('Tarefa', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Pendente',
    },
    dataEntrega: DataTypes.DATE,
    projetoId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Projetos',
        key: 'id',
      },
    },
    prioridade: { // Nova coluna, se necessário
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Tarefa.associate = (models) => {
    Tarefa.belongsTo(models.Projeto, {
      foreignKey: 'projetoId',
      as: 'projeto',
    });
  };

  return Tarefa;
};
