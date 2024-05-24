// controladores/usuarioControlador.js
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const gerarToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const registrarUsuario = async (req, res) => {
  const { nomeUsuario, senha, funcao } = req.body;
  const usuarioExiste = await Usuario.findOne({ nomeUsuario });

  if (usuarioExiste) {
    res.status(400).json({ mensagem: 'Usuário já existe' });
    return;
  }

  const usuario = await Usuario.create({ nomeUsuario, senha, funcao });

  if (usuario) {
    res.status(201).json({
      _id: usuario._id,
      nomeUsuario: usuario.nomeUsuario,
      funcao: usuario.funcao,
      token: gerarToken(usuario._id)
    });
  } else {
    res.status(400).json({ mensagem: 'Dados de usuário inválidos' });
  }
};

const autenticarUsuario = async (req, res) => {
  const { nomeUsuario, senha } = req.body;
  const usuario = await Usuario.findOne({ nomeUsuario });

  if (usuario && (await usuario.compararSenha(senha))) {
    res.json({
      _id: usuario._id,
      nomeUsuario: usuario.nomeUsuario,
      funcao: usuario.funcao,
      token: gerarToken(usuario._id)
    });
  } else {
    res.status(401).json({ mensagem: 'Credenciais inválidas' });
  }
};

module.exports = { registrarUsuario, autenticarUsuario };
