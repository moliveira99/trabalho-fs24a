// rotas/tarefaRotas.js
const express = require('express');
const {
  criarTarefa,
  listarTarefas,
  obterTarefa,
  atualizarTarefa,
  deletarTarefa
} = require('../controllers/tarefa');
const { proteger, admin } = require('../middleware/auth');
const router = express.Router();

router.route('/')
  .post(proteger, criarTarefa)
  .get(proteger, listarTarefas);

router.route('/:id')
  .get(proteger, obterTarefa)
  .put(proteger, atualizarTarefa)
  .delete(proteger, deletarTarefa);

module.exports = router;
