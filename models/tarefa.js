// modelos/tarefa.js
const mongoose = require('mongoose');

const tarefaEsquema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { type: String, enum: ['PENDENTE', 'CONCLUIDA'], default: 'PENDENTE' },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Tarefa', tarefaEsquema);
