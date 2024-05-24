// modelos/usuario.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const usuarioEsquema = new mongoose.Schema({
  nomeUsuario: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  funcao: { type: String, enum: ['USUARIO', 'ADMIN'], default: 'USUARIO' }
});

usuarioEsquema.pre('save', async function (next) {
  if (!this.isModified('senha')) return next();
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

usuarioEsquema.methods.compararSenha = async function (senha) {
  return await bcrypt.compare(senha, this.senha);
};

module.exports = mongoose.model('Usuario', usuarioEsquema);
