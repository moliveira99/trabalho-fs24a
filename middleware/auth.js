// middleware/auth.js
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const proteger = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decodificado = jwt.verify(token, process.env.JWT_SECRET);
      req.usuario = await Usuario.findById(decodificado.id).select('-senha');
      next();
    } catch (error) {
      res.status(401).json({ mensagem: 'Não autorizado, falha no token' });
    }
  }
  if (!token) {
    res.status(401).json({ mensagem: 'Não autorizado, sem token' });
  }
};

const admin = (req, res, next) => {
  if (req.usuario && req.usuario.funcao === 'ADMIN') {
    next();
  } else {
    res.status(403).json({ mensagem: 'Somente administradores, acesso negado' });
  }
};

module.exports = { proteger, admin };
