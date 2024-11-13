const express = require('express');
const tarefaController = require('../controllers/TarefaController');
const router = express.Router();

router.post('/tarefas', tarefaController.criarTarefa);
router.get('/tarefas', tarefaController.listarTarefas);
router.get('/tarefas/:id', tarefaController.obterTarefa);
router.put('/tarefas/:id', tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', tarefaController.deletarTarefa);

module.exports = router;
