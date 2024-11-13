const { Projeto } = require('../models');

exports.criarProjeto = async (req, res) => {
  try {
    const projeto = await Projeto.create(req.body);
    res.status(201).json(projeto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar projeto' });
  }
};

exports.listarProjetos = async (req, res) => {
  try {
    const projetos = await Projeto.findAll();
    res.json(projetos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar projetos' });
  }
};

exports.obterProjeto = async (req, res) => {
    try {
      const projeto = await Projeto.findByPk(req.params.id);
      if (!projeto) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      res.json(projeto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter projeto' });
    }
};

exports.atualizarProjeto = async (req, res) => {
    try {
      const projeto = await Projeto.findByPk(req.params.id);
      if (!projeto) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      await projeto.update(req.body);
      res.json(projeto);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar projeto' });
    }
};

exports.deletarProjeto = async (req, res) => {
    try {
      const projeto = await Projeto.findByPk(req.params.id);
      if (!projeto) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      await projeto.destroy();
      res.status(204).send(); // Resposta sem conteúdo após a exclusão
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar projeto' });
    }
};
