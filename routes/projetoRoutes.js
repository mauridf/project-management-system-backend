const express = require('express');
const router = express.Router();
const ProjetoController = require('../controllers/ProjetoController');

router.post('/projetos', ProjetoController.criarProjeto);
router.get('/projetos', ProjetoController.listarProjetos);
router.get('/projetos/:id', ProjetoController.obterProjeto);
router.put('/projetos/:id', ProjetoController.atualizarProjeto);
router.delete('/projetos/:id', ProjetoController.deletarProjeto);

module.exports = router;
