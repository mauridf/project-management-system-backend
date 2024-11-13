module.exports = (sequelize, DataTypes) => {
  const Projeto = sequelize.define('Projeto', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: DataTypes.TEXT,
    prazo: DataTypes.DATE,
  });

  Projeto.associate = (models) => {
    Projeto.hasMany(models.Tarefa, { foreignKey: 'projetoId', as: 'tarefas' });
  };

  return Projeto;
};
