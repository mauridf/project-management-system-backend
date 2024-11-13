const { Tarefa } = require('../models');

exports.criarTarefa = async (req, res) => {
    try {
      const tarefa = await Tarefa.create(req.body);
      res.status(201).json(tarefa);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
  };

exports.listarTarefas = async (req, res) => {
    try {
      const tarefas = await Tarefa.findAll({
        include: [
          {
            model: require('../models').Projeto,
            as: 'projeto',
          },
        ],
      });
      res.json(tarefas);
    } catch (error) {
        console.error('Erro ao listar tarefas:', error.message); // Adicione detalhes do erro
        console.error('Detalhes do stack:', error.stack); // Log do stack trace completo
        res.status(500).json({ error: 'Erro ao listar tarefas' });
    }
};  
  
  exports.obterTarefa = async (req, res) => {
      try {
        const tarefa = await Tarefa.findByPk(req.params.id);
        if (!tarefa) {
          return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        res.json(tarefa);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao obter tarefa' });
      }
  };
  
  exports.atualizarTarefa = async (req, res) => {
      try {
        const tarefa = await Tarefa.findByPk(req.params.id);
        if (!tarefa) {
          return res.status(404).json({ error: 'Tarefa não encontrada' });
        }
        await tarefa.update(req.body);
        res.json(tarefa);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa' });
      }
  };
  
  exports.deletarTarefa = async (req, res) => {
      try {
        const tarefa = await Tarefa.findByPk(req.params.id);
        if (!tarefa) {
          return res.status(404).json({ error: 'Tarefa não encontrado' });
        }
        await tarefa.destroy();
        res.status(204).send(); // Resposta sem conteúdo após a exclusão
      } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar tarefa' });
      }
  };