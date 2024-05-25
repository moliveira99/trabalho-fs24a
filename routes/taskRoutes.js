
const express = require('express');
const router = express.Router();
const { listarTarefas, obterTarefa, criarTarefa, atualizarTarefa, removerTarefa } = require('../controllers/TaskController');
const { proteger } = require('../middleware/authMiddleware');

router.route('/')
    .get(proteger, listarTarefas)
    .post(proteger, criarTarefa);

router.route('/:id')
    .get(proteger, obterTarefa)
    .put(proteger, atualizarTarefa)
    .delete(proteger, removerTarefa);

module.exports = router;
