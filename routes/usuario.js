// rotas/usuarioRotas.js
const express = require('express');
const { registrarUsuario, autenticarUsuario } = require('../controllers/usuario');
const router = express.Router();

router.post('/registrar', registrarUsuario);
router.post('/login', autenticarUsuario);

module.exports = router;
